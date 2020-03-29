import React, { useEffect } from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const TITLE = 'Chat Room | Express, React & Socket.IO'

const App = () => {

  useEffect(() => {
    document.title = TITLE;
  });

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
