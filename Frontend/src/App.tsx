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
                <div className="page-header">
                    <h1 className="display-1 text-center"> Yelp! </h1>
                    <h5 className="display-5 text-center">Yelp based search tool</h5>
                </div>
                <div className="row">
                    <Search />
                    <Content reviews={content} />
                </div>
            </div>
        );
    }
}


export default App;