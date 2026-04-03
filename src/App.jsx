import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Presidents from './pages/Presidents';
import Gallery from './pages/Gallery';
import Members from './pages/Members';
import Sessions from './pages/Services';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans text-[var(--color-text-main)] bg-[var(--color-bg)]">
          <Navbar />
          <main className="flex-1 w-full relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/presidents" element={<Presidents />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/members" element={<Members />} />
              <Route path="/services" element={<Sessions />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

// dlfmdlmldsk