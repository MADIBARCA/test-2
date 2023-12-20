import { Route } from "react-router";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import Step1 from "./pages/login-page/Step1";
import Step2 from "./pages/login-page/Step2";

export default function App() {
  return (
    <BrowserRouter>
      <header className="h-20 bg-primary flex items-center p-4">
        <h1 className="text-3xl text-black">Title</h1>
      </header>
      <main className="flex flex-col p-4 h-full">
        <Switch>
          <Route exact path="/login">
            <Redirect to="/login/step-1" />
          </Route>
          <Route exact path="/">
            <Redirect to="/login/step-1" />
          </Route>
          <Route path="/login/step-1">
            <Step1 />
          </Route>
          <Route path="/login/step-2">
            <Step2 />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}
