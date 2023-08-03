import React, { Component } from 'react';
import Loading from './Loading';


class Home extends Component {

    render() {
        document.title = "Bohubrihi Restaurant";
        return (
            <div>
                <Loading />
                <h1>This is home</h1>
            </div>
        );
    }
}

export default Home;