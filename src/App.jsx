import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About";
import Experiance from "./components/experiance/Experiance";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experiance />
            {/* <Services /> */}
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
