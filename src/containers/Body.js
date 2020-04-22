import React from 'react';
import Projects from '../components/Projects';

class Body extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
        };
    };

    getApi= () => {
        let THIS = this;
        fetch("https://api.github.com/users/StevenB96/repos")
        .then(response => response.json())
        .then(json => THIS.setState({data: json}))
        .then(console.log(this.state.data))
        .catch(error => console.log(error));
    }

    componentDidMount() {
       this.getApi();
    };

    render() {
        if (!this.state.data) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <Projects data={this.state.data} />
            )
        }
    }
}

export default Body;

// https://api.github.com/users/StevenB96/repos
