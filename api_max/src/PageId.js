import React from 'react'
import { Link } from 'react-router-dom';

class PageId extends React.Component {


    render() {
        console.log("ok");
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
                <Link to="/">Retour</Link>
            </div>
        );
    }
}
export default PageId