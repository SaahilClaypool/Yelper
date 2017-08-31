import * as React from 'react';
import Search from './Search';
import Content from './Content'; 

export interface State {

}

class App extends React.Component<{}, State> {
    constructor() {
        super(); 
    }

    render() {
        return (
            <div className="App">
                <div className="Header">
                    <h1> Yelp! </h1>
                    <h2>Yelp based search tool</h2>
                </div>
                <Search />
                <Content html="<h1>this is a test</h1><p>paragraph</p>" />
            </div>
        );
    }
}


export default App;