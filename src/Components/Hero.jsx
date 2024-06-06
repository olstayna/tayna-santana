import WavingHand from "../img/waving-hand.webp";
import GitHub from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Memoji from "../img/memoji.webp";
import Resume from "./Resume";
import Download from "../img/download.png";

function Hero() {
    return (
        <section className="container">
            <div className="intro" id="home">
                <div className="i-left">
                    <div className="i-name">
                        <span>
                            Oiê <img src={WavingHand} width="48" height="48" alt="Gif animado de uma mão acenando" />
                        </span>
                        <h1>Meu nome é <br /><span className="myname">Tayná Santana</span>, <br /> Desenvolvedora Front End</h1>
                    </div>

                    <div className="i-icons">
                        <a href="https://github.com/olstayna" target="blank" aria-label="GitHub">
                            <img src={GitHub} alt="Logotipo GitHub" loading="lazy" width="87px" height="90px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/olstayna/" target="blank" aria-label="LinkedIn">
                            <img src={LinkedIn} alt="Logotipo LinkedIn" loading="lazy" width="87px" height="86px"/>
                        </a>
                    </div>
                </div>

                <div className="i-right">
                    <img src={Memoji} alt="Avatar estilizado Memoji de Tayná Santana" loading="eager"/>
                    <div style={{ top: '15rem', left: '10rem' }}>
                        <Resume image={Download} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;