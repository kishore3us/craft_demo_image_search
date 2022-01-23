import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './authors';
import AuthorsDetails from './authorDetails';
const Webpages = () => {
    return(
        <Router>
             <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path = "authors" element={<AuthorsDetails/>} />
             </Routes>
        </Router>
    );
};
export default Webpages;