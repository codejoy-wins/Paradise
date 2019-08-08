import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      song: <iframe width="560" height="315" src="https://www.youtube.com/embed/1R0AUyvNc4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      songNum: 1,
    }
    this.changeSong=this.changeSong.bind(this)
  }

  changeSong(){
    console.log("changing song")
    if(this.state.songNum===1){
      this.setState({
        song: <iframe width="560" height="315" src="https://www.youtube.com/embed/Zz80CVr9NTs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        songNum: 2,
      })
    }else{
      this.setState({
        song: <iframe width="560" height="315" src="https://www.youtube.com/embed/1R0AUyvNc4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        songNum: 1,
      })
    }
    
  }

  render(){
    return (
      <div className="App">
        {this.state.song}
        <button onClick={this.changeSong}>Change Song</button>
      </div>
    );
  }
  
}

export default App;
