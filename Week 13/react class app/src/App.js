import React, {Component} from 'react';
import './App.css';
import Modal from './Components/Modal/Modal';
import BarChart from './Components/Modal/Chart';

class App extends Component {
  state = {
    show:false,

    projects:[
      {id: 'one', name: 'Project One', description: 'This is my first project'},
      {id: 'two', name: 'Project Two', description: 'This is my second project'},
      {id: 'three', name: 'Project Three', description: 'This is my third project'}
    ],
  
     data1: [12, 5, 6, 6, 9, 10],
      w: 500 ,
      h: 300

  };
  
  showModal = ()=>{
    this.setState({
      // show:true
      show:!this.state.show
    });
  };

    

  render(){ 

    const items = this.state.projects.map(
      
      (data) => 
        <div className = 'Projects'>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        </div>
      
    
    );

    return (
    <div className="App">
      
      {/* <BarChart/> */}

      <BarChart data = {this.state.data1} w = {this.state.w} h = {this.state.h} color = "gold"></BarChart>

      <h1>Wow it actually works</h1>
      
      {/* <h2>{this.state.projects[1].name}</h2> */}
      
      <button onClick = {() => {this.showModal();}}>Open Modal</button>

      {items}

      <Modal onClose = {this.showModal} show = {this.state.show}>This is Dynamic</Modal>
     
    </div>
  );
}}
 

export default App;
