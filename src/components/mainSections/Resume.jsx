import cvPdf from '/assets/cv.pdf';

export function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume <a className="btn btn-success" href={cvPdf} target="_blank"><i
                        className='fas fa-file-download'
                        style={
                            {fontSize: '24px'}
                        }></i></a>
                    </h2>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <p className="resume-title-h4">Personal Information</p>
                            <p><em>Innovative Software Engineer with 2+ years of experience in developing Apps from
                                initial
                                concept to final, polished deliverable.</em></p>
                            <ul>
                                <li>Alexandria, Egypt</li>
                                <li>+201100479096</li>
                                <li>abdelrhman@mgahed.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <p className="resume-title-h4">Bachelor in Computer Science</p>
                            <h5>2016 - 2020</h5>
                            <p><em>Arab Academy for Science and Technology, Alexandria, Egypt</em></p>
                            <p>Bachelor Degree in Computer Science, Major Software Engineering With GPA 3.1
                                (V.Good)</p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Developer</p>
                            <h5>2018 - Present</h5>
                            <p><em>Freelancing</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Web Developer</p>
                            <h5>10/2020 - 12/2020</h5>
                            <p><em>MicroHap at Alexandria, Egypt</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Web-Developer</p>
                            <h5>01/2021 - 02/2021</h5>
                            <p><em>Tadarab at Alexandria, Egypt</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Founder and Full Stack Web-Developer</p>
                            <h5>05/2021 - Present</h5>
                            <p><em>Mr Technawy</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Front-End Developer</p>
                            <h5>04/2021 - 11/2021</h5>
                            <p><em>Sphinx Publishing</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Developer <small>Part-Time</small></p>
                            <h5>06/2022 - 09/2022</h5>
                            <p><em>Platform KW</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Developer</p>
                            <h5>06/2022 - 01/2023</h5>
                            <p><em>Blue Holding</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Developer <small>Part-Time</small></p>
                            <h5>07/2023 - present</h5>
                            <p><em>Poslix</em></p>
                        </div>
                        <div className="resume-item">
                            <p className="resume-title-h4">Full Stack Developer</p>
                            <h5>02/2023 - present</h5>
                            <p><em>Recapet</em></p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}