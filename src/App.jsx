import './App.css'
import {Header} from "./components/Header.jsx";
import {Hero} from "./components/Hero.jsx";
import {Main} from "./components/Main.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {

    return (
        <>
            {/*======= Mobile nav toggle button =======*/}
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

            {/*======= Header =======*/}
            <Header/>

            {/*======= Hero Section =======*/}
            <Hero/>

            {/*main*/}
            <Main/>

            {/*======= Footer =======*/}
            <Footer/>
        </>
    )
}

export default App
