import React,{Fragment} from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/Banner';
import Search from './components/search/search';
import Explore  from './components/explore/explore';
import Adventure from './components/adventures/Adventure';
import Booking from './components/booking/booking';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Search />
        <Explore />
        <Adventure />
        <Booking />
        <Gallery />
        <Contact />
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
