import Login from "../components/layouts/Login"
import NameForm from "../components/pizza/NameForm";
import Panier from "../components/pizza/Panier";
import Pizzamaker from "../components/pizza/Pizzamaker";

function Pizzeria () {
    return (
        <div className='pizzeria'>
            <Login/>
            <NameForm/>
            <Pizzamaker/>
            <Panier/>
        </div>
    )
}

export default Pizzeria;