import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { themeContext } from "../Context";
import { useContext } from "react";

function Footer() {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    return (
       <section className="container-f">
          <ScrollToTop smooth style={{ backgroundColor: "#9B2FF5", boxShadow: 'none' }} width="20" height="40"/>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <span className="logo">
                        <svg width="80px" height="80px" viewBox="0 0 81 80" aria-label="Logo Icon" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M40.9771 80C63.0687 80 80.9774 62.0914 80.9774 40C80.9773 17.9086 63.0685 -1.38069e-06 40.9769 -8.89459e-07C18.8853 -3.98224e-07 0.976602 17.9086 0.97665 40C0.976698 62.0914 18.8855 80 40.9771 80Z" fill="rgba(0,0,0,0)"></path><path d="M41.1477 73.9297C59.7223 73.8962 74.6797 58.6603 74.5562 39.8995C74.4327 21.1387 59.275 5.95723 40.7005 5.99078C22.126 6.02432 7.16848 21.2602 7.29199 40.021C7.4155 58.7818 22.5732 73.9633 41.1477 73.9297Z" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M41.1263 73.8359C51.0045 73.8136 58.9205 58.6285 58.8073 39.9192C58.694 21.2098 50.5943 6.06098 40.7161 6.08332C30.8379 6.10567 22.9219 21.2907 23.0352 40.0001C23.1484 58.7095 31.2481 73.8583 41.1263 73.8359Z" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M7.11914 39.8867L74.719 39.5995" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M9.5 27.5076L72.2542 27.2409" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M18.0156 15.1169L63.6156 14.9232" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M18.0078 64.7942L64.054 64.5984" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M9.51172 52.4614L72.4352 52.1937" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M65.7781 40.0175C45.4753 39.9779 40.9169 44.5589 40.9429 64.9808C40.9168 44.5435 36.3512 39.94 16.0638 39.9004C36.3666 39.94 40.925 35.359 40.899 14.9372C40.925 35.359 45.4905 39.9625 65.7781 40.0175Z" fill="#fff"></path><path d="M40.7773 6.15967L41.0645 73.7439" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
                    </span>
                </div>
                <div className="footer-info">
                    <div className="personal-info">
                        <p>Tayná Santana</p>
                        <div className="footer-icons">
                            <a href="https://github.com/olstayna" target="blank" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/olstayna" target="blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-links">
                <ul>
                <li><a href="/" style={{ color: lightMode ? 'black' : '' }} aria-label="Página inicial">Home</a></li>
                <li><a href="#about" style={{ color: lightMode ? 'black' : '' }} aria-label="Sobre mim">Sobre mim</a></li>
                <li><a href="#projects" style={{ color: lightMode ? 'black' : '' }} aria-label="Projetos">Projetos</a></li>
                <li><a href="#professional" style={{ color: lightMode ? 'black' : '' }} aria-label="Histórico profissional">Histórico profissional</a></li>
                <li><a href="#contact" style={{ color: lightMode ? 'black' : '' }} aria-label="Contato">Contato</a></li>
                </ul>
                <p>Projetado e construído por <a href="https://www.linkedin.com/in/olstayna" target="blank" aria-label="LinkedIn">olstayna</a> com <span>&hearts;</span> <br/>Copyright ©️ 2024. Todos os direitos reservados.</p>
            </div>
        </footer>

       </section>
    );
}

export default Footer;