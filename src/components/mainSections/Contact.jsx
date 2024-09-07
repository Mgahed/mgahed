export function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Contact me to make app for you business.</p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-12 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <p className="resume-title-h4">Location:</p>
                                <p>Alexandria, Egypt</p>
                            </div>

                            <a href="mailto:abdelrhman@mgahed.com" target="_blank">
                                <div className="email">
                                    <i className="icofont-envelope"></i>
                                    <p className="resume-title-h4">Email:</p>
                                    <p>abdelrhman@mgahed.com</p>
                                </div>
                            </a>

                            <a href="tel:+201100479096" target="_blank">
                                <div className="phone">
                                    <i className="icofont-phone"></i>
                                    <p className="resume-title-h4">Call:</p>
                                    <p>+201100479096</p>
                                </div>
                            </a>

                            <a href="https://t.me/Mgaheds" target="_blank">
                                <div className="phone">
                                    <i style={
                                        {fontSize: '24px'}
                                    } className='fa fa-telegram'></i>
                                    <p className="resume-title-h4">Telegram:</p>
                                    <p>@Mgaheds</p>
                                </div>
                            </a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.36364995778!2d29.814800765744582!3d31.224034935279008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1607539878577!5m2!1sen!2seg"
                                frameBorder="0" style={
                                {border: 0, width: '100%', height: '290px'}
                            }
                                allowFullScreen></iframe>
                            {/*<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>*/}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}