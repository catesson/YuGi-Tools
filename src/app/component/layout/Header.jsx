import { Nav } from "./Nav"
import { ProfilBtn } from "./ConnectionBtn"
import { useSelector } from "react-redux";
export function Header(){
    // const userConnect = useSelector((state) => state.connect)
    return <header className="w-full bg-red-900 flex justify-evenly sm:justify-center sm:items-center items-start " >
        <Nav />

        <div className="h-14 flex items-center"><ProfilBtn  connected={false} /></div>
    </header>
}