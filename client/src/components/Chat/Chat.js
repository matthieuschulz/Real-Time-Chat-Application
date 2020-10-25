import React,  {useState, useEffect} from 'react'; //useeffect is hook that helps us use side effects, it happens on component deadmount
import queryString from 'query-string';// helps us to retrieve data from the url
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {name,room }  = queryString.parse(location.search);


        
            socket = io(ENDPOINT);


            setName(name);
            setRoom(room);

            



            socket.emit('join', {name, room});
    }, [ENDPOINT, location.search])
    return ( 
        <h1>Chat</h1>
    )


}
export default Chat;