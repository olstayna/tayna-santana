import "../Styles/main.css";
import Technologies from "../Data/about.json";

function About() {
    return (
        <section className="container">
            <div className="about" id="about">
                <h2>Sobre mim</h2>
                <h3>
                    Sou uma jovem apaixonada por tecnologia e acredito que posso realizar mudanças significativas por meio dela! Desde os meus 9 anos, sou entusiasta do campo tecnológico e, ao longo dos anos, cultivei meu amor pelo desenvolvimento.
                    Meu foco está em alcançar alta performance, mantendo excelentes métricas de SEO, CRO, usabilidade, acessibilidade e responsividade. Conheça algumas das linguagens de programação, ferramentas e tecnologias que trabalho:
                </h3>
                <div className="technologies">
                    {
                        Technologies && Technologies.map(record => {
                            return (
                                <div className="tech-icons" key={record.id}>
                                    <div className="border">
                                        <img src={record.img} alt={`Logo ${record.name}`} title={record.name} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <a href="/#contact">
                    <button className="btn">Entre em contato</button>
                </a>
            </div>
        </section>
    );
}

export default About;