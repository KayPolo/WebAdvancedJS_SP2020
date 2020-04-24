import React, { Component } from 'react';
import "./Modal.css";



class Modal extends Component{

    closeModal = ()=>{
        this.props.onClose();
    } 

    render(){

        if(!this.props.show){
            return null
        }

        return(

            <div className = 'myModal'>

                <div className = "Container">

                    <div>{this.props.children}</div>
                    <span id = 'close' onClick = {()=>{this.closeModal();}}>&#10005;</span>

                </div>


            </div>
        );
    }


}

export default Modal;