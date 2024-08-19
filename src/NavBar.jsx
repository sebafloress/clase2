import { CardWidget } from "./componentes/CartWidget"

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-orange-400 p-1.5">
            <ul className="flex">
                <li className="p-1.5"><a href="">Pelotas</a></li>
                <li className="p-1.5"><a href="">Botines</a></li>
                <li className="p-1.5"><a href="">Ubicacion</a></li>
                <li className="p-1.5 font-serif"><a href="">Registrarme</a></li>
            </ul>
            <CardWidget/>
        </nav>
    )
}