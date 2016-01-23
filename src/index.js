"use strict";
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import Search from './components/search.jsx';
import About from './components/about.jsx';
import ydn from './database.jsx';

injectTapEventPlugin();

render(
    <Router history={hashHistory}>
        <Route path='/' component={Search} />
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('content')
);