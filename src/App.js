import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Dictionary</h1>
          <Dictionary defaultKeyword="sunset" />
        </div>
      </header>
      <footer className="App-footer">
        <small>Coded by Margareta Krajnikovics</small>
      </footer>
    </div>
  );
}

export default App;
