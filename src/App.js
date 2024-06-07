import './App.css';
import Header from './Components/UIComponents/Header';
import Hero from './Components/Pages/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Works from './Components/Pages/Works';
import Teams from './Components/Pages/Teams';
import Testimonial from './Components/Pages/Testimonial';
import Pricing from './Components/Pages/Pricing';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Location from './Components/Pages/Location';
import ContactIcons from './Components/Pages/ContactIcons';
import Footer from './Components/UIComponents/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonial />
        <Pricing />
        <Blog />
        <Contact />
        <Location />
        <ContactIcons />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
