import NavButton from "./navButton"


function Navbar() {


  return (
    <nav className="">
      <ul className="flex h-full justify-between items-center divide-x divide-slate-700 text-white border-x mr-6 border-slate-700">
        <NavButton text="About" navigateTo={"/"}/>
        <NavButton text="Proyects" navigateTo={"/proyects"}/>
        <NavButton text="Studies" navigateTo={"/studies"}/>
      </ul>
    </nav>
  )
}

export default Navbar;