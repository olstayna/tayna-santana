import React from 'react';
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const Modal = ({ project, open, onClose }) => {
    const closeModal = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
    };

    if (!open || !project) return null;

    const { title, img, description, type, languages, link } = project;

    return (
        <div className="overlay" onClick={closeModal}>
            <div className="modalContainer">
                <div className="modalImage">
                    <img src={img} alt="" />
                </div>
                <div className="modalRight">
                    <FaTimes onClick={onClose} className="closeBtn" />
                    <div className="modalContent">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <ul>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Tipo:</span>
                                <span>{type}</span>
                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Linguagens:</span>
                                <span>{languages}</span>
                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Disponível em:</span>
                                <span style={{ maxWidth: '80vw', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    <a href={link} target="blank"><FaExternalLinkAlt /> {link}</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;