import Navbar from "./navbar";

function Header(){
    return (
        <header className="w-full h-16 flex justify-between items-center sticky top-0 bg-slate-950 text-white border-b border-slate-700">
            <p className="w-28 font-serif text-5xl ml-6 italic font-extrabold text-orange-600">D</p>
            <Navbar/>
        </header>
    )
}

export default Header;