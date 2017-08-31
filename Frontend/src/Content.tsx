import * as React from 'react';
import {Messages} from './bundle'
import SocketClient from './SocketClient';


export interface Props {
    html: string; 
}
export interface State {
    html: string; 
}

class Content extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            html: this.props.html,
        };
        this.onNewContent = this.onNewContent.bind(this); 
        let socket = SocketClient.GetInstance(); 
        socket.onPageResult= this.onNewContent; 


    }

    onNewContent(newContent: Messages.PageResult) {
      console.log(`Message: ${newContent}`)
      this.setState({
          html: newContent.html
      })
    }

    render(){
        return (
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.html}}/>
        )
    }
}

export default Content; 