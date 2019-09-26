import React from "react";

const target = event.target;
const name = target.name;
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            value: ""

        };
        this.changement = this.changement.bind(this);
        this.soumet = this.soumet.bind(this);
    }

    changement(event) {
        this.setState({
            name: event.target.name,
            value: event.target.value
        }); // force la maj dans l'envoi de la value
    }

    soumet(event) {
        console.log("Bonjour ! " + this.state.name + " dis  " + this.state.value);
        event.preventDefault();

        this.setState({
            [name]: value
        });


    }


    render() {
        return(
            <div>
                <form onSubmit={this.soumet}>
                    <label>
                        Nom :
                        <input type="text" name="name" onChange={this.changement}
                        />
                    </label>
                    <label>
                        Commentaire :
                        <textarea  value={this.state.value}  onChange={this.changement}
                        />
                    </label>
                    <input type="submit" value="Envoi"/>
                </form>
            </div>
        )
    }
}

export default App;