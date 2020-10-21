import React,  {useState, useEffect} from 'react'; //useeffect is hook that helps us use side effects, it happens on component deadmount
import queryString from 'query-string';// helps us to retrieve data from the url
import io from 'socket.io-client';

import './Chat.css';


const Chat = ({location}) => {

    useEffect(() => {
        const {name,room }  = queryString.parse(location.search);

        console.log(name, room);
    })
    return ( 
        <h1>Chat</h1>
    )
}
export default Chat;