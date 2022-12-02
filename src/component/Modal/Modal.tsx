import React from "react";
import '../../styles/component/modal.css';

export interface PropsModal {
    isOpen: boolean,
    children?: React.ReactNode
}

const Modal: React.FC<PropsModal> = ({ isOpen, children }) => (
    <div></div>
)

export default Modal;