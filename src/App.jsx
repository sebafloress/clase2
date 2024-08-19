import { NavBar } from "./NavBar";
import { CardWidget } from "./componentes/CartWidget";
import { ItemListContainer } from "./componentes/ItemListContainer";


function App (){

    return (
        <div>
            <NavBar/>
            <ItemListContainer mensaje={"Bienvenidos"}/>
        </div>
    )
}
export default App;