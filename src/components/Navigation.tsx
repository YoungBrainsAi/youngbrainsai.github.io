import logo from '../img/logo.png'

export default function Navigation() {
    return (
        <nav id="navbar" className="bg-blue-900 text-white">
            <div className="container d-flex align-items-center justify-content-end">
                <img
                    src={logo}
                    alt=""
                    height={75}
                    style={{ marginRight: 'auto' }}
                />
                <a className="text-blue-100 nav-item">About Us</a>
                <a className="text-blue-100 nav-item">Challenge</a>
                <a href="#mission">
                    <button
                        className="nav-btn"
                        style={{ marginLeft: 30 }}
                    >
                        Learn More
                    </button>
                </a>
            </div>
        </nav>
    )
}
