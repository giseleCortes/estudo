import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import repositories from './Repositories';
import Home from './Pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= {Home} />
                <Route path='/repositories' component={repositories} />
            </Switch>
        </BrowserRouter>
    )
}