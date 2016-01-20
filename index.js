"use strict";
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import Search from './www/components/search.jsx';
import About from './www/components/about.jsx';

injectTapEventPlugin();


render(
    <Router history={hashHistory}>
        <Route path='/' component={Search} />
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('content')
);