import './App.css';
import Home from './components/home/Home';

function App() {
  console.log('ENV', process.env.REACT_APP_ENV);
  return <Home />;
}

export default App;
