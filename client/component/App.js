import React from "react";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

import "../stylesheet/main.css";
// import Quiz from "./Quiz";
import UserLogin from "./auth/UserLogin";
import UserSignup from "./auth/UserSignup";
import AdminLogin from "./auth/AdminLogin";
import QuizAttemptByUser from "./QuizAttemptByUser.js";
import LeaderBoard from "./LeaderBoard.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/user/login" component={UserLogin} />
          {/* <Route exact path="/quiz" component={Quiz} /> */}
          
          
          
          <Route exact path="/user/login" component={UserLogin} />
          
          <Route path="/user/signup" component={UserSignup} />
          <Route component={UserSignup} />

        </Switch>
      </div>
    );
  }
}

export default App;
