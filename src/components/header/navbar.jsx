import NavButton from "./navButton"

function Navbar() {
  return (
    <nav className="">
      <ul className="flex h-14 justify-between items-center divide-x divide-slate-700 text-white border-x mr-6 border-slate-700">
        <NavButton href="#About">About</NavButton>
        <NavButton href="#Proyects">Proyects</NavButton>
        <NavButton href="#Studies">Studies</NavButton>
        <NavButton href="#Contact">Contact</NavButton>
      </ul>
    </nav>
  )
}

export default Navbar;