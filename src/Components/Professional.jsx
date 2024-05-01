import React from "react";
import Historic from "../Data/professional.json";
import { themeContext } from "../Context";
import { useContext } from "react";

function Professional() {
    // Ordenar as experiências profissionais em ordem decrescente com base no id
    const sortedHistoric = Historic.sort((a, b) => b.id - a.id);

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <section className="container">
            <div className="professional" id="professional">
                <h2>Histórico profissional</h2>
                <h3>Algumas de minhas últimas experiências profissionais</h3>
                <div className="profContainer" style={{ color: lightMode ? 'white' : '' }}>
                    {sortedHistoric.map((experience) => (
                        <div className="histProfessional" key={experience.id}>
                            <div className="leftProfCont">
                                <h4>{experience.role}</h4>
                                <span>{experience.enterprise}</span>
                                <p>{experience.date}</p>
                            </div>
                            <div className="rightProfCont">
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Professional;