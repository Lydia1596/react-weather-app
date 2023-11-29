import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">Weather App</header>
      <Weather />
      <footer>
        This app is coded by Lydia Prentice and is{" "}
        <a
          href="https://github.com/Lydia1596/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
