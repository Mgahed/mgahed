export function Services() {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Creating Apps Using several programming languages and latest and best technologies with best
                        performance.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                        <div className="icon"><i className="icofont-computer"></i></div>
                        <p className="title">Desktop Apps</p>
                        <p className="description">Creating Desktop Apps with best performance.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i style={
                            {fontSize: '27px'}
                        } className='fas'>&#xf3cd;</i></div>
                        <p className="title">Mobile Apps</p>
                        <p className="description">Creating mobile apps with latest available technologies.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i style={
                            {fontSize: '27px'}
                        } className='fas'>&#xf5fc;</i></div>
                        <p className="title">Web Apps</p>
                        <p className="description">Creating web apps using several technologies.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}