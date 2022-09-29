
import './App.css';
import Ans from './components/ans/Ans';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      
       <Nav></Nav>
       <h2> Select todays Activity</h2>
       <Home></Home>
       <Ans></Ans>
       <Footer></Footer>
    </div>
  );
}

export default App;
