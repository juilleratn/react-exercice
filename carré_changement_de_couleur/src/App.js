import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={color:""};
  }

  changeColor(color) {
    this.setState({color});
    console.log(this.setState)
  };

  render() {

    return (
        <div className="App">
          <div className="col1">
            <div className="color Blue" onClick={()=> this.changeColor('Blue')}></div>
            <div className="color Red" onClick={()=> this.changeColor('Red')}></div>
          </div>
          <div className="col2">
            <div className="color Yellow" onClick={()=> this.changeColor('Yellow')}></div>
            <div className="color Green" onClick={()=> this.changeColor('Green')}></div>
           </div>
          <Color color={this.state.color}/>
        </div>
    );
  }
}

class Color extends React.Component {


  render() {

console.log(this.props.color);

    return (
        <div className={"result " +this.props.color} >
        </div>
    );
  }

}


export default App;
