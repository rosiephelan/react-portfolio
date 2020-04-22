import React from 'react';

class Project extends React.Component {



    render() {
        const repoMap = this.props.data.map(x => 
        <li key={x.id}><a href={x.html_url} target="_blank">{x.name} {x.updated_at}</a></li>);

        return (
            <div>
                <h6>Projects</h6>
                <ul>
                    {repoMap}
                </ul>
            </div>
        )
    }  
}

export default Project;

