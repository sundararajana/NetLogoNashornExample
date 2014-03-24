import javax.script.*;
import java.io.*;

/**
 * Simple Main class that runs specified script in command line arg.
 * Copy this file to your NetLogo installation directory and compile
 * using javac. To run, use
 *
 *     java -cp ./NetLogo.jar:. Main ControllerExample.js
 */
public class Main {
  public static void main(String[] args) throws Exception {
     ScriptEngineManager m = new ScriptEngineManager();
     ScriptEngine e = m.getEngineByName("nashorn");
     e.eval(new FileReader(args[0]));
  }
}
