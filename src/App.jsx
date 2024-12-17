import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './Comosant/Section';
import Nav from './Comosant/Nav';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Comosant/About';
import Resume from './Comosant/Resume';
import Contact from './Comosant/Contact';
import ParticleBackground from './Comosant/Particle'
function App() {
  const sr = ScrollReveal({
    distance:"40px",
    reset :true,
    duration:2000 
  })
  const [them,setThem ] = useState('clear')
  const [toggel,setToggel ] = useState('-130px')
  const [toggelbtn,setToggelbtn ] = useState(0)
  const [line_1,setLine_1] = useState('')
  const [line_3,setLine_3] = useState('')
  const handlerToggler = () => {
    toggelbtn === 0?setToggelbtn('-130px'):setToggelbtn(0)
    toggel === 0?setToggel('-130px'):setToggel(0) 
    toggelbtn === 0?setLine_1('line_1'):setLine_1('')
    toggelbtn === 0?setLine_3('line_3'):setLine_3('')
  }
  useEffect(()=>{
    sr.reveal('.Header,.Navigator',{delay:200,origin:"top"})
    sr.reveal('.Section_1,.Section_2',{delay:200,origin:"left"})
    sr.reveal('.main',{delay:200,origin:"bottom"})
  },[])
  return (
  <BrowserRouter>
  <ParticleBackground/>
  <div className={`cvv ${them}`}>
    <div style={{right:toggel}} className='navbarrrr align-items-center justify-content-center'>
      <Nav direction={'flex-column'} them={them} setThem={setThem}/>
    </div>
    <div className='container cv'>
        <header className='Header w-100  d-flex align-items-center justify-content-between'>
          <h1 className='m-4 myNameTitle'>  </h1>
          <div style={{transform:`translateX(${toggelbtn})`}} onClick={handlerToggler} className='buttonNavigator my-3 mx-4 flex-column align-items-center justify-content-center'>
            <div className={line_1} ></div>
            <div></div>
            <div className={line_3} ></div>
          </div>
        </header>
        <div className='row'>
        <section className='Section_1 col-md-4 col-sm-12 mb-2'>
          <Section them={them} />
        </section>
        <div className='col-md-8'>
          <div className='Navigator'>
          <Nav them={them} setThem={setThem}/>
          </div>
          <section className='Section_2 col-12 mt-2'>
          <Section them={them}/>
          </section>
          <main className='main col-12 mt-2 pb-3 mb-5'>
            <Routes>
              <Route path='/portfolio_project/' element={ <About them={them} /> } />
              <Route path='/Resume' element={ <Resume them={them}  /> } />
              <Route path='/Contact' element={ <Contact them={them} /> } />
            </Routes>
          </main>
        </div>
        </div>
    </div>
  </div>
  </BrowserRouter>
  )
}

export default App;
