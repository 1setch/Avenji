
import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Steps from './components/steps/steps';
import Testimonials from './components/testimonials/testim';
import Uform from './components/uform/uform';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <About/>
      <Steps/>
      <Projects/>
      <Testimonials/>
      <Uform/>
      <Footer/>
    </div>
  );
}

export default App;
