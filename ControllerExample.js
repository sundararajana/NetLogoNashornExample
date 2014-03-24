/**
 * See README.md
 *
 * Usage:
 *
 * $NETLOGO_DIR be your NetLogo installation directory.
 *
 * cp ControllerExample.js $NETLOGO_DIR
 * cd $NETLOGO_DIR
 * jjs -cp ./NetLogo.jar ControllerExample.js
 */

var HeadlessWorkspace = Java.type("org.nlogo.headless.HeadlessWorkspace")

// if you're running this script through 'jjs', -classpath classes are not
// loaded by thread context loader. So, set it explicitly!
// NetLogo expects it's loader to be thread context loader. Throws
// Exception in thread "main" java.lang.IllegalArgumentException: 
// requirement failed
//     at scala.Predef$.require(Predef.scala:202)

var Thread = Java.type("java.lang.Thread")
var ctxtLoader = Thread.currentThread().contextClassLoader
var netlogoLoader = HeadlessWorkspace.class.classLoader
if (ctxtLoader != netlogoLoader) {
    Thread.currentThread().contextClassLoader = netlogoLoader
}

var ws = HeadlessWorkspace.newInstance()
ws.open("models/Sample Models/Earth Science/Fire.nlogo")
ws.command("set density 62")
ws.command("random-seed 0")
ws.command("setup")
ws.command("repeat 50 [ go ]")
print(ws.report("burned-trees"))
ws.dispose()
