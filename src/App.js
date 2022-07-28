import logo from './logo.svg';
import './App.css';

// Video: https://www.youtube.com/watch?v=8KB3DHI-QbM
// Code: https://github.com/chrisblakely01/react-notes-app
// CSS: https://raw.githubusercontent.com/chrisblakely01/react-notes-app/master/src/index.css

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
