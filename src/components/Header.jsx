import mgahedWebp from '/assets/img/mgahed.webp';

export function Header() {
    return (
        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src={mgahedWebp} alt="personal-photo" className="img-fluid rounded-circle"/>
                    <p className="text-light"><a style={
                        {fontSize: '27px', color: 'white'}
                    } href="https://mgahed.com">Abdelrhman
                        Mgahed</a></p>
                    <div className="social-links mt-3 text-center">
                        <a href="https://blog.mgahed.com" target="_blank" className="blog">
                            <i className="fa-brands fa-hashnode"></i>
                        </a>
                        <a href="https://github.com/Mgahed" target="_blank" className="github">
                            <i style={
                                {fontSize: '20px'}
                            } className="fa">&#xf09b;</i>
                        </a>
                        <a href="https://www.linkedin.com/in/mgahed/" target="_blank" className="linkedin">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="https://t.me/Mgaheds" target="_blank" className="telegram">
                            <i style={
                                {fontSize: '20px'}
                            } className='fa fa-telegram'></i>
                        </a>
                        <a href="mailto:abdelrhman@mgahed.com">
                            <i style={
                                {fontSize: '20px'}
                            } className="material-icons">&#xe0be;</i>
                        </a>

                    </div>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                        <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
                        <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>

                    </ul>
                </nav>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i
                    className="icofont-navigation-menu"></i></button>

            </div>
        </header>
    )
}