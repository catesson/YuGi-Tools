import { Nav } from "./Nav"
import { ProfilBtn } from "./ConnectionBtn"
export function Header(){
    return <header className="w-full bg-red-900 flex justify-evenly sm:justify-center sm:items-center items-start " >
        <Nav />

        <div className="h-14 flex items-center"><ProfilBtn  connected={true} /></div>
    </header>
}