import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import repositores from './repositores';
import Home from '.Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component= {Home} />
                <Route path='/repositories' component={repositores} />
            </Switch>
        </BrowserRouter>
    )
}