import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Nav />
      </header>
      <main>
        <Banner />
      </main>
    </>
  )
}

export default App
