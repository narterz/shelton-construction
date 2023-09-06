import './App.scss';
import { useMediaQuery } from 'react-responsive'
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Faq } from './pages/Faq';

function App() {
  
  const isSmallScreen = useMediaQuery({ maxWidth: "768px" });

  return (
    <div className="App xsm:h-[580vh] md:h-[580vh] relative">
      <Nav />
      <Home />
      <About />
      <Services />
      <Faq />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
