import './App.css';
import NameForm from './components/NameForm';
import Login from './components/layouts/Login';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import Panier from './components/Panier';
import Pizzamaker from './components/Pizzamaker';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur la React Pizzeria </h1>
      <Nav/>
      <Login/>
      <Panier/>
      <Pizzamaker/>
      <NameForm/>
      <Footer/>
    </div>
  );
}

export default App;
