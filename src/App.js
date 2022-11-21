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
        <small>
          This project was coded by Margareta Krajnikovics and is{" "}
          <a
            href="https://github.com/Ritulja/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://lovely-beignet-396d6d.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
