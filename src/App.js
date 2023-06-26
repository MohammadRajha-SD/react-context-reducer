import './App.css';
import Calc from './components/Calc';
import ContextProvider from './contexts/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Calc />
      </ContextProvider>
    </div>
  );
}

export default App;
