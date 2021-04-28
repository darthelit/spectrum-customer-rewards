import Transactions from './components/Transactions';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
