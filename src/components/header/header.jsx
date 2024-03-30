import Navbar from "./navbar";

function Header(){
    return (
        <header className="w-full h-16 flex justify-between items-center sticky top-0 bg-slate-800 text-white">
            <p className="w-28 font-serif text-5xl pl-6 italic font-extrabold">D</p>
            <mesh/>
            <Navbar/>
        </header>
    )
}

export default Header;