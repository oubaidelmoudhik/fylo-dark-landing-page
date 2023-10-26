import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

// Main page structure

function Homepage() {
    return (
        <>
            <Header logo={logo} />
            <Hero />
            <Features />
            <About />
            <Testimonials />
            <Subscribe />
            <Footer />
        </>
    );
}

function App() {
    return <Homepage />;
}

export default App;
