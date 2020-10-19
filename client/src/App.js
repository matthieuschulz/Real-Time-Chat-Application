import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
const App = () => (
    <Router>
        

        <Route path="/" exact component={Join} /> {/* when the user comes on the page, he is greeted with join component, he will pass his data through the login form and  that data will be passed to the chat */}
        <Route path="/chat" component={Chat} />{/* once we have the data, we render the chat component */}


    </Router>
);

export default App;