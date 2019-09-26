import React from "react";
import ReactDOM from "react-dom";
// import Client from "./Client";
// import ClientForm from "./ClientForm";

import "./index.css";

class App extends React.Component{



    state = {
        clients : [
            {id : 1, nom : "Bernard Dupond"},
            {id : 2, nom : "Hervé Clerc"},
            {id : 3, nom : "Jean Erhard"}
        ],
        nouveauClient: ''
    };

    handleDelete = id => {
        const clients = [...this.state.clients];
        const index = clients.findIndex(client => client.id === id);

        clients.splice(index, 1);

        this.setState({ clients });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const nom = this.state.nouveauClient;
        const clients = [...this.state.clients];
        clients.push({id ,nom});
        this.setState({clients, nouveauClient: ''});

    };

    handleChange = (event) => {
        this.setState({ nouveauClient: event.currentTarget.value });
    };

    render(){
        const title = "Liste de clients";

        return <div>
            <h1>{title}</h1>
                <ul>
                    {this.state.clients.map((client)=> (
                        <li>
                            {client.nom}{" "} <button onClick={() => this.handleDelete(client.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Nouveau client" />
                    <button>Valider</button>

                </form>
            </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
