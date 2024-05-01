function Contact() {
    return (
        <section className="container">
            <div className="contact" id="contact">
                <h2>Contato</h2>
                <h3>Gostou do meu trabalho? Não perca tempo! Entre em contato comigo :)</h3>
            </div>
            <div className="contactBtns">
                <a href="https://www.linkedin.com/in/olstayna/" target="blank" className="btnContact">
                    <span>LinkedIn</span>
                </a>
                <a href="https://www.linkedin.com/in/olstayna/" target="blank" className="btnContact">
                    <span>GitHub</span>
                </a>
                <a href="mailto:tayna.oliveira.santana@gmail.com" target="blank" className="btnContact">
                    <span>tayna.oliveira.santana@gmail.com</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;