import * as React from 'react';
import Search from './Search';
import Content from './Content'; 
import * as Messages from './bundle'

export interface State {

}

class App extends React.Component<{}, State> {
    constructor() {
        super(); 
    }

    render() {
        var content = Messages.Messages.PageResult.create(); 
        content.name = "tempName"; 
        content.reviews = new Array<Messages.Messages.Review>(); 
        return (
            <div className="App">
                <div className="Header">
                    <h1> Yelp! </h1>
                    <h2>Yelp based search tool</h2>
                </div>
                <Search />
                <Content reviews={content}/>
            </div>
        );
    }
}


export default App;