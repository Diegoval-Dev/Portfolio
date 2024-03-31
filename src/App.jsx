import Header from './components/header/header'
import AboutMe from './components/sectionAbout/about'

function App() {


  return (
    <>
      <Header></Header>
      <div className="bg-gradient-to-r from-slate-800 from-10% via-slate-900 via-70% to-orange-950 to-90%">
        <AboutMe></AboutMe>
      </div>
    </>
  )
}

export default App
