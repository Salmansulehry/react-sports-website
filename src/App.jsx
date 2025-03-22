import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThumbnailSlider } from './components/ThumbnailSlider';
import { Content } from './components/Content';
import { Events } from './components/Events';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Hero></Hero>
      <div className='main'>
        <div className="main-left">
          <ThumbnailSlider></ThumbnailSlider>
          <Content></Content>
        </div>
        <div className='main-right'>
        <Events></Events>
        </div>
      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
