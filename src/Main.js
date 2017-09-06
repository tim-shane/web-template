/**
 * Created by tim on 8/23/17.
 */

import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';



class Main extends Component{
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    {/*<Route path="/contact" component={contact}/>*/}
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </main>
        )
    }
}
export default Main;