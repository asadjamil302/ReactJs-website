// import logo from './logo.svg';
import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Information from './components/Information';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Slider from './components/Slider';
import Whychooseus from './components/Whychooseus';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Information></Information>
      <Whychooseus></Whychooseus>
      <Services></Services>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
