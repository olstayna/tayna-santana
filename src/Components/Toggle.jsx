import { FiSun, FiMoon } from "react-icons/fi";
import { themeContext } from "../Context";
import { useContext } from "react";

function Toggle() {

    const theme = useContext(themeContext)
    const lightMode = theme.state.lightMode;

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
    return (
        <div className="toggle-container">
            <div className="toggle" onClick={handleClick}>
                <FiMoon/>
                <FiSun/>
            <div className="t-button" style={lightMode? {right: '2px'} : {left:'2px'}}></div>
        </div>
        </div>
    );
}

export default Toggle;