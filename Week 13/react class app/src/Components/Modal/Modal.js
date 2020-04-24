import React, {Component} from 'react';
import './Modal.css';


class Modal extends Component{

    onClose = ()=>{
        this.props.onClose();
    }

render(){

    if(!this.props.show){
        return null;
    }

    return(
        <div className = 'myModal'>
            <div className = 'Container'>
        <h1>{this.props.children}</h1>
        <div>
            <span id = 'close' onClick = {() => {this.onClose();} } >&#10005;</span>
            </div>
            </div>

    
        </div>
    ); 
}

}



export default Modal;