import './App.css';
import Nav from './Components/Header';
import Hero from './Components/Hero';
import Course from './Components/Course';
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
      <Hero />
      <Course />
      </div>
      <Footer />
    </div>
  );
}

export default App;
