import React, { useState } from 'react';
/*Components */
import Hero from './components/Hero';
import Nav from './components/Nav';
import Content from './components/Content';
import Steps from './components/Steps';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader';
import OrderNotification from './components/OrderNotification';
/*Styles*/
import './App.css';
/* Hooks */
import useGetData from './hooks/useGetData';


function App() {
  const [dataPost,setDataPost] = useState(null);
  const dataPizza = useGetData('http://localhost:1337/pizzas');
  const dataTestimonials = useGetData('http://localhost:1337/testimonios');
  return dataPizza.length === 0 || dataTestimonials.length === 0 ? <Loader /> : (
    <div className="App">
      <Nav />
      <Hero />
      <Content data={dataPizza}/>
      <Testimonials data={dataTestimonials}/>
      <Steps />
      <Contact dataPost={dataPost} setDataPost={setDataPost}/>
      <Footer />
      <OrderNotification visible={dataPost !== null ? true : false} setDataPost={setDataPost}/>
    </div>
  );
}

export default App;
