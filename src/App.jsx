import Header from './components/header/header'
import AboutMe from './components/sectionAbout/about'

function App() {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <main>
        <AboutMe></AboutMe>
      </main>
    </div>
  )
}

export default App