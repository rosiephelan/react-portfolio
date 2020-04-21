import React from 'react';

class Body extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
        };
    };
    static getDerivedStateFromProps() {
        let THIS = this;
        fetch("http://www.omdbapi.com/?apikey=a2fe6869&&s=titanic")
        .then(function (response) {
            let json = response.json();
            THIS.setState({data: json});
        })
        .catch(error => console.log(error));
    };
    render() {
        console.log(this.state.data)
        if (!this.state.data) {
            return (
                <div>A</div>
            )
        } else {
            return (
                <div>B</div>
            )
        }
    }
}

export default Body;

// https://api.github.com/users/StevenB96/repos
