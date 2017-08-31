import * as React from 'react';
import './App.css';
import SocketClient from './SocketClient';
import {Messages} from './bundle';


export interface Props {

}

export interface State {
    value: string; 
    items: QueryItem[];
}

class Search extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props); 
        this.state = {
            value: '',
            items : []
        };

        this.handleQueryInput = this.handleQueryInput.bind(this); 
        this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
        let socket = SocketClient.GetInstance(); 
        this.handleQueryResult = this.handleQueryResult.bind(this); 
        socket.onQueryResult = this.handleQueryResult;

    }

    render () {
        return (
            <div className="search">
                <input className="searchInput" type="text" value={this.state.value} onChange={this.handleQueryInput} />
                <QueryResultList
                    items={this.state.items}
                    changeSelectedFunction={this.handleSelectionChanged}>
                </QueryResultList>
            </div>
        )
    }

    handleQueryInput (event : React.FormEvent<HTMLInputElement>) {
        this.setState({
            value: event.currentTarget.value
        });

        let socket = SocketClient.GetInstance();
        let query = Messages.Query.create({query: event.currentTarget.value})
        var message = Messages.Message.create (
            {
                type: "query", 
                query: query
            }
        ); 

        var encoded = Messages.Message.encode(message).finish(); 
        socket.send(encoded); 
        console.log(`Queried for : ${event.currentTarget.value}`);
    }

    handleSelectionChanged (selectedName: string, selectedLocation: string){
        // unselect all current options ? 
        var newItems = this.state.items.map((value) => {
            return new QueryItem({
                itemName : value.state.itemName,
                itemLocation : value.state.itemLocation,
                selected : selectedLocation == value.state.itemLocation,
                changeSelectedFunction : this.handleSelectionChanged
            });
        });

        this.setState({items : newItems}); 

        var socket = SocketClient.GetInstance(); 
        var request = Messages.PageRequest.create({ path: selectedLocation}); 
        var message = Messages.Message.create(
            {
                type: "pagerequest",
                pagerequest: request
            }
        ); 
    
        var encoded = Messages.Message.encode(message).finish();
            
        socket.send(encoded);  
    }

    handleQueryResult (results: Messages.QueryResults) {
        let newItems: QueryItem[] = results.results.map((value) => {
            return new QueryItem({
                itemName : value.name, 
                itemLocation : value.path,
                selected : false,
                changeSelectedFunction : this.handleSelectionChanged
            });
        });

        this.setState({
            items: newItems
        });
    }
}


export interface QueryItemProps{
    itemName: string, 
    itemLocation: string
    selected: boolean 
    changeSelectedFunction: (name:string, location:string)=>void; 
}
export interface QueryItemState{
    itemName: string, 
    itemLocation: string,
    selected: boolean
}

export class QueryItem extends React.Component<QueryItemProps, QueryItemState> {
    constructor(props: QueryItemProps) {
        super(props); 
        this.state = {
            itemName: this.props.itemName,
            itemLocation: this.props.itemLocation,
            selected: this.props.selected
        };
        this.onClickHandler = this.onClickHandler.bind(this); 
    }

    render() {
        return (
            <li className={"searchItem" + (this.state.selected ? " selected" : "" ) }
                 onClick={this.onClickHandler}>
                    {this.state.itemName}
            </li>
        );
    }

    onClickHandler() {
        this.props.changeSelectedFunction(this.state.itemName, this.state.itemLocation); 
    }
}

export interface QueryProps{
    items: QueryItem[],
    changeSelectedFunction: (name:string, location:string)=>void; 
}

export class QueryResultList extends React.Component<QueryProps, {}> {
    constructor(props: QueryProps ) {
        super(props);    
        this.state = {
            items: props.items
        };
    }
    render() {
        let items = this.props.items.map((item) => {
            return item.render(); 
        }); 

        return (
        <div>
            <ul className="queryResultList">
                {items}
            </ul >
        </div>
        ); 
    }
}

export default Search; 