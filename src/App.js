import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="gradient">
        <div className="pre-section">
          <header className="header">What word do you want to look up?</header>
          <main>
            <Dictionary defaultKeyWord="dictionary" />
          </main>
        </div>
        <footer className="text-center">
          <a href="https://github.com/pvlizaveta/dictionary-project">Coded</a>{" "}
          by Lizaveta Pauliushchyk
        </footer>
      </div>
    </div>
  );
}

export default App;
