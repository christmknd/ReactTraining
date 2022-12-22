import './App.css';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import Panier from './components/layouts/Panier';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur la React Pizzeria </h1>
      <Nav/>
      <Panier/>
      <Footer/>
    </div>
  );
}

export default App;
