import logo from "../src/assets/icons/logo.svg";
import "./App.css";

function App() {
  console.log("ENV", process.env.REACT_APP_ENV);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
