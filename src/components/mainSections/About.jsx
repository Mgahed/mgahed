import mgahedWebp from '/assets/img/mgahed.webp';

export function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>I'm Software Engineer, I have a very good experience in creating apps using several
                        frameworks,
                        technologies and programming languages</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={mgahedWebp} className="img-fluid" alt="personal-photo"/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Software Developer.</h3>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <span
                                        style={
                                        {fontWeight: 600}
                                        }>Birthday:</span> 18 May 1998
                                    </li>
                                    <li><i className="icofont-rounded-right"></i> <span
                                        style={
                                            {fontWeight: 600}
                                        }>Phone:</span>
                                        +201100479096
                                    </li>
                                    <li><i className="icofont-rounded-right"></i> <span
                                        style={
                                            {fontWeight: 600}
                                        }>Mail:</span>
                                        abdelrhman@mgahed.com
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <span
                                        style={
                                        {fontWeight: 600}
                                        }>Age:</span> <span id="myAge"></span>
                                    </li>
                                    <li><i className="icofont-rounded-right"></i> <span
                                        style={
                                        {fontWeight: 600}
                                        }>Degree:</span>
                                        Bachelor
                                    </li>
                                    <li><i className="icofont-rounded-right"></i> <span
                                        style={
                                        {fontWeight: 600}
                                        }>Freelance:</span> Available
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}