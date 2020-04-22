import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div className="about_div">
                <h6 id="bio">Bio</h6>
                <p>Role: We're trainee software developers at futureproof.</p>
                <p>Languages:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JSX</li>
                </ul>
            </div>
        )
    }  
}

export default About;