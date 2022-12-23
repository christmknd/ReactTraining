import Link from "next/link";

function Nav () {
    return (
        <nav className="menu">
            <div className="left-menu">
            <p>React Pizerria</p>
            </div>
            <div className="right-menu">
            <ul>
                <li><Link href={"/"}> <a>Home</a> </Link></li>
                <li><Link href={"/nameform"}> <a>Nameform</a> </Link></li>
                <li><Link href={"/panier"}> <a>Panier</a> </Link></li>
                <li><Link href={"/pizzamaker"}> <a>Pizzamaker</a> </Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;