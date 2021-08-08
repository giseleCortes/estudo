import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import repositores from './repositores';
import Home from './home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= {Home} />
                <Route path='/repositories' component={repositores} />
            </Switch>
        </BrowserRouter>
    )
}