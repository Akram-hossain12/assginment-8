
import './App.css';
import Ans from './components/ans/Ans';
import Home from './components/Home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      
       <Nav></Nav>
       <h2> Select todays Activity</h2>
       <Home></Home>
       <Ans></Ans>
    </div>
  );
}

export default App;
