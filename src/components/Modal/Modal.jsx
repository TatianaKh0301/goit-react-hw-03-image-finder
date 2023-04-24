import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component { 
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);   
    };

    handleKeyDown = event => {        
        if (event.code === "Escape") {
            this.props.onClose();
        }
        return;
    };

    handleBackdropClick = event => {
        console.log("event.currentTarget", event.currentTarget);
        console.log("event.target", event.target);
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }       
    }
    
    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalWindow>
                    {this.props.children}
                </ModalWindow>
            </Overlay>,
            modalRoot,
        );
    }    
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

