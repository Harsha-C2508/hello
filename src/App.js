import logo from './logo.svg';
import './App.css';
import answer1 from "./components/answer1";
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <answer1 name="harsha" place="india"/>
    </div>
  );
}

export default App;