import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AnalysisTab from "../components/containerTabs/AnalysisTab";
import BordCastingTab from "../components/containerTabs/BrodcastingTab";
import InboxTab from "../components/containerTabs/InboxTab";
import RequestsTab from "../components/containerTabs/RequestsTab";
import ReviewTab from "../components/containerTabs/ReviewsTab";
import SettingsTab from "../components/containerTabs/SettingsTab";
import Home from "../components/Home.js";
import PageNotFound from "../components/PageNotFound";
import Subjects from "../components/subjects/Subjects";
const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* general Routes */}
      <Route exact path="/" component={Home} />

      {/* devDashboard routes */}
      <Route exact path="/devdashboard-analysis" component={AnalysisTab} />
      <Route exact path="/devdashboard-brodcast" component={BordCastingTab} />
      <Route exact path="/devdashboard-inbox" component={InboxTab} />
      <Route exact path="/devdashboard-request" component={RequestsTab} />
      <Route exact path="/devdashboard-review" component={ReviewTab} />
      <Route exact path="/devdashboard-settings/:id" component={SettingsTab} />
      {/* End of devDashboard routes */}

      {/* student routes */}
      <Route exact path="/subjects" component={Subjects} />
      {/*NOT FOUND */}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
