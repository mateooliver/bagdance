import './App.css';
import CarouselBienvenida from './components/carousel';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NuestraHistoria from './components/nuestraHistoria';
import Footer from './components/footer';
import Materiales from './components/Materiales';
import Bolsos from './components/Bolsos';
import Formulario from './components/formulario';




function App() {
  return (
    <div className="">
      <a href="https://wa.me/+5491156105645" target="_blank"><img src="img/whatsapp.svg"
        alt="Boton de WhatsApp" class="botonWhatsapp"/></a>
      <Navbar />
      <CarouselBienvenida />
      <NuestraHistoria />
      <Materiales />
      <hr className='col-8 mx-auto mt-4' />
      <Bolsos />
      <hr className='col-8 mx-auto mt-4' />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
