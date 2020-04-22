import React from 'react';
import Projects from '../components/Projects';
import About from '../components/About';

class Body extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
        };
    };

    getApi () {
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
                <div style = {body}>
                    <About data={this.state.data} />
                    <Projects data={this.state.data} />
                </div>
            )
        }
    }
}

export default Body;

let body = {
    margin: "0% 10%",
}
// https://api.github.com/users/StevenB96/repos
