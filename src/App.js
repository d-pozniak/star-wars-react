import './App.css';
import { useState } from "react";
import StartView from "./components/StartView";
import AppWiki from "./components/AppWiki";

function App() {
  const [searchStarted, setSearchStarted] = useState(false);
  function handleClick(){
    setSearchStarted(!searchStarted);
  }
  return (
    <div className="App">
      {(!searchStarted)&&<StartView handleClick={handleClick} theme={'Star Wars'}/>}
      { (searchStarted) &&
          (<main className={'App-main'}>
            <AppWiki handleClick={handleClick}/>
          </main>)
      }
    </div>
  );
}

export default App;
