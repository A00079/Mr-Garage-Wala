import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/LandingPage";
import TermsAndCondition from "./pages/TermsAndCondition";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetStartForm from "./pages/GetStartForm";
import BuyPackage from "./pages/Buy-Package";

import { WithLayoutRoute } from "./routers";

function Routes() {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={LandingPageLayout}
          component={LandingPage}
        />
        <WithLayoutRoute
          exact
          path="/terms-conditions"
          layout={LandingPageLayout}
          component={TermsAndCondition}
        />
        <WithLayoutRoute
          exact
          path="/Get-Started-Form"
          layout={LandingPageLayout}
          component={GetStartForm}
        />
        <WithLayoutRoute
          exact
          path="/refund-policy"
          layout={LandingPageLayout}
          component={RefundPolicy}
        />
        <WithLayoutRoute
          exact
          path="/privacy-policy"
          layout={LandingPageLayout}
          component={PrivacyPolicy}
        />
        <WithLayoutRoute
          exact
          path="/buy-package"
          layout={LandingPageLayout}
          component={BuyPackage}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
