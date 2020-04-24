import React, { Component } from 'react';
import './App.css';
import Modal from './Modal/Modal';
import BarChart from './Chart/Chart';


class App extends Component{

  state = {

    show:false,

    data:[3,5,7,9,10,5,2],
    w:600,
    h:300,
    color: "gold",

    projects:[
      {
        id: 'one',
        name: 'Project One',
        description: 'This is my first project'

      },

      {
        id: 'two',
        name: 'Project Two',
        description: 'This is my second project'

      },

      {
        id: 'three',
        name: 'Project Three',
        description: 'This is my third project'

      }

    ]
  }

  showModal = ()=>{
    this.setState({

      show:!this.state.show

    });

  }
  

  render(){

    const items = this.state.projects.map(
      (data)=>
        <div className = "Projects">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      
    )

    return(

      <div className = "App">
          <h1>Hello!!!!</h1>

          {/* <h2>{this.state.projects[1].name}</h2> */}

          <button onClick = {() =>{this.showModal();}}>Open Modal</button>


          {items}

          <Modal onClose = {this.showModal} show = {this.state.show}><h2>BUILDING MY CONTENT</h2></Modal>


          <BarChart data = {this.state.data} w = {this.state.w} h = {this.state.h} color = {this.state.color}></BarChart>
          
       
      </div>

    );
  }


}



export default App;
