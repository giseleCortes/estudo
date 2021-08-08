import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import repositores from './Pages/Home/Repositores/repositores';
import Home from './Pages/Home/home';

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