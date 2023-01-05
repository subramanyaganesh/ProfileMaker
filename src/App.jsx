import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      {/* ================================================================================================ */}
      <About />
      {/* ================================================================================================ */}
      <Experience />
      {/* ================================================================================================ */}
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
