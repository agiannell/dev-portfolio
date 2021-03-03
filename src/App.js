import Header from './Components/Header';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Experience from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <section className="app-container">
      <Header />
      <Intro />
      <Projects />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </section>
  );
}

export default App;
