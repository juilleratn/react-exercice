import axios from 'axios';
import React, {Fragment} from 'react'
import './App.css';
import './index.css';
import './PageId';
import {Link} from 'react-router-dom';




class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tableau: []};
    }

    componentDidMount() {
        const getUser = async () => {
            try {
               axios.get('http://localhost:4000/todos')
                   .then(res=>{
                       console.log(res);
                       this.setState({
                           tableau:res.data
                       })
                   })
            } catch (error) {
                console.error(error)
            }
        };
        getUser();
    };

    render() {
        const tableau = this.state.tableau;
        const tableaushow = tableau.map(category=> {

               return(
                   <Fragment> 
                       <li>{category.title}
                           <Link to={`/todos/PageId/${category.id}`}> item</Link>
                       </li>
                   </Fragment>
               );
        });

        return(
            <div className="App">
                <ul>
                    {tableaushow}
                </ul>
            </div>
        );
    }
}



export default App;
