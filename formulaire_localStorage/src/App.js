import React from "react";


class App extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                accepte: true,
                nom: "",
                commentaire: "",
                selection:""

            };
            this.changementDentree = this.changementDentree.bind(this);
            this.submit = this.submit.bind(this);

    }

    changementDentree (event) {  // permet de récuperer toutes les values et de les mixer
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            selection: event.target.value
        });
    }

    submit(event) {
        console.log(this.state.selection + " " + this.state.nom + " dis " + this.state.commentaire+" "+this.state.accepte);
        event.preventDefault();

        const { nom, commentaire, accepte, selection } = this.state;
        localStorage.setItem("nom", accepte ? nom : "");
        localStorage.setItem("commentaire", accepte ? commentaire : "");
        localStorage.setItem("selection", accepte ? selection : "");
        localStorage.setItem("accepte", accepte);
    }

    componentDidMount() {
        const accepte = localStorage.getItem("accepte") === "";
        const nom = accepte ? localStorage.getItem("nom") : "";
        const commentaire = accepte ? localStorage.getItem("commentaire") : "";
        const selection = accepte ? localStorage.getItem("selection") : "";
        this.setState({ nom, commentaire, accepte, selection });
    }
    

    render() {
        return (
            <form onSubmit={this.submit}>

                <br/>

                <label>
                    Nom :
                    <input
                        name="nom"
                        type="text"
                        value={this.state.nom}
                        onChange={this.changementDentree} />
                </label>
                <br/>
                <label>
                    Commentaire :
                    <textarea
                        name="commentaire"
                        value={this.state.value}
                        onChange={this.changementDentree}/>
                </label>
                <br/>
                <label>
                    J'accepte :
                    <input
                        name="accepte"
                        type="checkbox"
                        checked={this.state.accepte}
                        onChange={this.changementDentree} />
                </label>
                <br/>
                <label>
                    M
                    <input
                        name="m"
                        value="M"
                        type="radio"
                        checked={this.state.selection === "M"}
                        onChange={this.changementDentree}/>
                </label>
                <label>
                    Mme
                    <input
                        name="mme"
                        value="Mme"
                        type="radio"
                        checked={this.state.selection === "Mme"}
                        onChange={this.changementDentree}/>
                </label>
                <input
                type="submit"
                value="Envoi"/>
            </form>
        );
    }
}

export default App;