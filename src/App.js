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
    <div className="w-full bg-primary">
      <StarBackground />
      <Navbar />
      <div className="flex flex-col space-y-12 px-4 sm:px-24">
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;