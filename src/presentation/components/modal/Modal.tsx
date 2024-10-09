import React from 'react';
import './Modal.css';
import { BsX } from "react-icons/bs";

interface IModal {
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ onClose, children }: IModal) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
                <button onClick={onClose} className="close-bttn">
                    <BsX/>
                </button>
            </div>
        </div>
    );
};
