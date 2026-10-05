import { useState } from 'react'
import './style.css'
import print from '../../assets/print.png'

export const Main = () => {
    const [copied, setCopied] = useState(false)

    const handleCopyCode = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <main className="hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    FRONT-END DEVELOPER
                </div>

                <h1>
                    Ajudo pequenas e grandes empresas. <span>A serem vistas e lembradas.</span>
                </h1>

                <p>
                    Desenvolvo interfaces modernas, funcionais e bem estruturadas utilizando tecnologias modernas de desenvolvimento web.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => window.location.href = '#projetos'}>
                        Ver projetos &rarr;
                    </button>
                    <button className="btn-secondary" onClick={() => window.location.href = '#sobre'}>
                        Conhecer meu trabalho &lt;&gt;
                    </button>
                </div>

                <div className="hero-quick-access">
                    <span className="quick-access-label">ACESSO RÁPIDO</span>
                    <div className="quick-access-links">
                        <a href="https://github.com/AndersonJr1819" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/anderson-ferreira-940ab43b9/" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                        <a href="mailto:contato@andersonfdsjunior06@gmail.com">
                            Email
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-visual" onClick={handleCopyCode} title="Clique para interagir">
                <div className="code-card-header">
                    <div className="window-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <span className="file-name">PortfolioExperience.jsx</span>
                </div>
                <div className="code-card-body">
                    <img src={print} alt="Print de um código em javascript feito por mim" />
                </div>
                {copied && <div className="copy-feedback">Interatividade simulada com sucesso!</div>}
            </div>
        </main>
    )
}