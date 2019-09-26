import React, {Fragment} from 'react';
import ReactDOM from "react-dom";
import axios from "axios"
import './App.css';

const url = "https://opentdb.com/api.php?amount=10";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {

    const getUser = async () => {
      try {
        // const response = await axios.get(url);
        // this.setState({data: response.data.results});

        const {data:{results}, status} = await axios.get(url);
        this.setState({data: results});

      } catch (error) {
        console.error(error)
      }
    };
    getUser();
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Répondre à la question: ' + this.state.value);
    event.preventDefault();
  }

    render()
    {
      return(
          <div className="App">

              <ul>
               {this.state.data.map((category)=> (
                  <Fragment>

                  <li>{category.question}</li>
                    <ul>
                      {category.incorrect_answers.map((answer)=> (<li>{answer}</li>))}
                    </ul>
                  </Fragment>
              ))}
             </ul>
         </div>
      );
    }

  // render(){
  //     return (
  //         <div className="App">
  //           <form onSubmit={this.handleSubmit}>
  //             <label>
  //               Répondre à la question:
  //                 <select value={this.state.data.map((category)=>  onChange={this.handleChange}>
  //                   <option>{item.question}</option>
  //                 </select>
  //                     )}
  //             </label>
  //             <input type="submit" value="Submit" />
  //           </form>
  //
  //         </div>
  //     );
  // }

}


export default App;
