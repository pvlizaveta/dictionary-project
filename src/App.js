import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <section>
      <header className="App-header">What word do you want to look up?</header>
      <main>
        <Dictionary defaultKeyWord="dictionary"/>
      </main>
      </section> 
      <footer className="text-center"><a href="https://github.com/pvlizaveta/dictionary-project">Coded</a> by Lizaveta Pauliushchyk</footer>
      
    </div>
  );
}

export default App;
