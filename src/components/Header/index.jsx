import Logo from '../../assets/Logo.png'
import './style.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo pessoal de Anderson Ferreira" />
                <a href="">Inicio</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">contato</a>
            </nav>
        </header>
    )
}