import Logo from '../../assets/Logo.png'
import './style.css'

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="brand-container">
                    <img src={Logo} alt="Logo pessoal de Anderson Ferreira" />
                    <div className="brand-text">
                        <span className="brand-name">ANDERSON FERREIRA</span>
                        <span className="brand-role">FRONT-END DEV</span>
                    </div>
                </div>

                <div className="nav-links">
                    <a href="#inicio">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#certificados">Certificados</a>
                    <a href="#contato">Contato</a>
                </div>

                <div className="nav-action">
                    <a href="#contato" className="btn-cta">Vamos conversar</a>
                </div>
            </nav>
        </header>
    )
}