import {ReactTyped} from "react-typed";

export function Hero() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Abdelrhman Mgahed | Lead</h1>
                <p style={
                    {
                        fontSize: '20px',
                    }
                }>
                    I'm a <span> </span>
                    <ReactTyped strings={[
                        ' Full-Stack Developer',
                        ' Software engineer'
                    ]} typeSpeed={70}
                        backSpeed={40}
                        loop
                    />
                </p>
            </div>
        </section>
    )
}