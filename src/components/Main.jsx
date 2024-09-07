import {About} from "./mainSections/About.jsx";
import {Skills} from "./mainSections/Skills.jsx";
import {Resume} from "./mainSections/Resume.jsx";
import {Portfolio} from "./mainSections/Portfolio.jsx";
import {Services} from "./mainSections/Services.jsx";
import {Contact} from "./mainSections/Contact.jsx";

export function Main() {
    return (
        <main id="main">

            {/*======= About Section =======*/}
            <About/>
            {/*End About Section*/}

            {/*======= Skills Section =======*/}
            <Skills/>
            {/*End Skills Section*/}

            {/*======= Resume Section =======*/}
            <Resume/>
            {/*End Resume Section*/}

            {/*======= Portfolio Section =======*/}
            <Portfolio/>
            {/*End Portfolio Section*/}

            {/*======= Services Section =======*/}
            <Services/>
            {/*End Services Section*/}

            {/*======= Contact Section =======*/}
            <Contact/>
            {/*End Contact Section*/}

        </main>
    )
}