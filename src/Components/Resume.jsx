import ResumePDF from "../img/Tayna - Dev II.pdf";
import { themeContext } from "../Context";
import { useContext } from "react";

function Resume({ image }) {

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <a href={ResumePDF} download="Tayna - Dev II.pdf">
            <div className="floatingdiv circle">
                <img src={image} alt="Ícone para download do currículo" width="47" height="47"/>
                <span style={{ color: lightMode ? 'white' : '' }}>CV</span>
            </div>
        </a>
    );
}

export default Resume;