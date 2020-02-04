import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateQuiz from '../CreateQuiz';
import CreateQuizTitle from '../CreateQuizTitle';
import Allquizzes from '../Allquizzes';

class ProtectedAdminRoutes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/admin/quiz/new/:id" component={CreateQuiz} />
                <Route exact path="/admin/quiz/title" component={CreateQuizTitle} />
                <Route path="/admin/quiz/allquizzes" component={Allquizzes} />
                <Route component={Allquizzes} />
            </Switch>
        )
    }
}

export default ProtectedAdminRoutes;