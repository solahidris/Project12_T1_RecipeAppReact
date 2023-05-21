import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-700 h-screen">

      {/* Header stuff ya know */}
      <div className="flex justify-center">
        <img src={logo} className="mt-10 h-20 w-20 animate-bounce" alt="logo" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-xs font-mono text-white">app abg dzul - delete sehari</h1>
      </div>

      <div>
      
      </div>

    </div>
  );
}

export default App;
