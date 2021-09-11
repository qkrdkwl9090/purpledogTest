import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Drawer from "Components/Drawer";
import TopStories from "Routes/TopStories";
import NewStories from "Routes/NewStories";
import AskStories from "Routes/AskStories";
import ShowStories from "Routes/ShowStories";
import JobStories from "Routes/JobStories";
import Detail from "Routes/Detail";
const PageRouter = () => (
  <Router>
    <Drawer />
    <Switch>
      <Route path="/topstories" component={TopStories} />
      <Route path="/newstories" component={NewStories} />
      <Route path="/askstories" component={AskStories} />
      <Route path="/showstories" component={ShowStories} />
      <Route path="/jobstories" component={JobStories} />
      <Route path="/detail/:id" component={Detail} />
      <Redirect from="*" to="/topstories" />
    </Switch>
  </Router>
);
export default PageRouter;
