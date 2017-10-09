import * as React from 'react';
import {Messages} from './bundle'
import SocketClient from './SocketClient';
import {ReviewList} from './Search'; 


export interface Props {
    reviews: Messages.PageResult; 
}

class Content extends React.Component<Props, Props> {
    constructor(props: Props){
        super(props);

        var initialState : Messages.PageResult = Messages.PageResult.create();
        initialState.name = ""; 
        initialState.reviews = new Array<Messages.Review>(); 

        this.state = {
            reviews: initialState
        }

        this.onNewContent = this.onNewContent.bind(this); 
        let socket = SocketClient.GetInstance(); 
        socket.onPageResult= this.onNewContent; 
    }

    onNewContent(newContent: Messages.PageResult) {
      console.log(`Message: ${newContent}`)
      this.setState({
          reviews: newContent
      });
    }

    render(){
        if(this.state == null || this.state.reviews == null || this.state.reviews.reviews == null) {
            return (
                <div className="content">
                    <p>state is null</p>
                </div>
            );
        }
        return (
            <div className="content">
                {/* <p>state is {this.state.reviews.toJSON()}</p> */}
                <ReviewList reviews={this.state.reviews.reviews}/>
            </div>
        )
    }
}

export default Content; 