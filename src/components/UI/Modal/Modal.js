import React, { Component } from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show || nextProps.children !== this.props.children) {
            return true;
        }
        return false;
    }
    
    render() {
        return (
        <Auxiliary>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
            <div 
                className={classes.Modal} 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                    }}>
                {this.props.children}
            </div>
        </Auxiliary>
        );
    };
};

export default Modal;