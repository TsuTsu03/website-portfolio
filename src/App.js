import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import StarBackground from './components/StarBackground';
import MusicPlayer from "./components/MusicPlayer";



function App() {
  return (
    <div>
            <StarBackground />
      <Navbar />
      <Home />
      <About />
      <div className="h-64 bg-primary"></div>
      <Skills />
      <div className="h-64 bg-primary"></div>
      <Work />
      <div className="h-64 bg-primary"></div>
      <Contact />
      <MusicPlayer />
    </div>
  );
}

export default App;