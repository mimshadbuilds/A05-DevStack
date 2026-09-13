import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import type { Itechnology } from './types'
import Technologies from './components/technologies/Technologies'
import Footer from './components/Footer'


  const technologyFetch = async (): Promise<Itechnology[]> => {
    const res = await fetch(`/technologies.json`);
    const data = await res.json();
    // console.log(data)
    return data;
  }
function App() {
    const [technologyPromise] = useState(() => technologyFetch());
  return (
    <>
    <div className='flex min-h-screen flex-col'>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <Nav />
      </header>
      <main className='flex-1'>
        <Banner />
        <Suspense fallback={<div className='text-3xl text-center'>"Loading..."</div>}>
          <Technologies technologyPromise={technologyPromise} />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  )
}

export default App
