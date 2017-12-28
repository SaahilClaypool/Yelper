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
            <div className="search col-2">
                <span className="input-group-addon">
                    <input className="searchInput form-control" type="text" value={this.state.value} onChange={this.handleQueryInput} />
                </span>
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

        if (!results.append) {
            this.setState({
                items: newItems
            });
        }
        else {
            let existingItems = this.state.items;
            let combinedItems = existingItems.concat(newItems);
            this.setState({
                items: combinedItems
            });
        }
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
            <button className={"list-group-item list-group-item-action" + (this.state.selected ? " active" : "" ) }
                 onClick={this.onClickHandler}
                 key={this.props.itemLocation}>
                    {this.state.itemName}
            </button>
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
            <div className="list-group queryResultList">
                {items}
            </div>
        ); 
    }
}

export interface ReviewProps {
    url : string,
    text : string,
    rating : number,
    time : string,
    name : string
}
export class Review extends React.Component<ReviewProps> {
    constructor(props: ReviewProps) {
        super(props);    
    }
    render() {
        // TODO Add keys to the things so they aren't alawys re-rendered
        let starsFun = (rating: number) => {
            let retStr: string = ""; 
            for(let _ of new Array(rating)){
                retStr += "⭐"; 
            }
            return retStr; 
        }
        return (
            <div>
                <li className="list-group-item flex-column align-items-start"
                    key={this.props.time}>
                    <h5> <a href={this.props.url}>{this.props.name}</a> </h5>
                    <p>{starsFun(this.props.rating)}</p>
                    <p>{this.props.text}</p>
                    <small className="text-muted">{this.props.time}</small>
                </li>
            </div>
        ); 
    }
}

export interface ReviewListProps {
    reviews : Messages.IReview[]; 
}


export class ReviewList extends React.Component<ReviewListProps,ReviewListProps> {
    constructor(props: ReviewListProps) {
        super(props);    
    }

    render() {
        let reviewList = this.props.reviews.map((rev) => {
            return new Review({
                url: rev.url, 
                text: rev.text, 
                rating: rev.rating, 
                time: rev.time, 
                name: rev.name
            }).render(); 
        });
        return (
            <div >
                <ul className="list-group">
                    {reviewList}
                </ul>
                <p>there are {reviewList.length} reviews</p>
            </div>
        );
    }

}

export default Search; 
