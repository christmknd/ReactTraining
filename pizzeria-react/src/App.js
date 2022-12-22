import './App.css';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import Panier from './components/layouts/Panier';
import Pizzamaker from './components/Pizzamaker';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur la React Pizzeria </h1>
      <Nav/>
      <Panier/>
      <Pizzamaker/>
      <Footer/>
    </div>
  );
}

export default App;
