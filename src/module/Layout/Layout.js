import { createBrowserHistory as history } from "history";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Config from "../../config";
import PrivateRoute from "./PrivateRoute";
import PageContainer from "../../components/pageContainer/PageContainer"

const HOME_PAGE = lazy(() =>
  import("../../components/homePage/HomePage")
);

const MOVIE_DETAILS = lazy(() =>
  import("../../components/movieDetails/MovieDetails")
);

const THEATER_LISTING = lazy(() =>
  import("../../components/theaterListing/TheaterListing")
);

const SEAT_SELECTION_PAGE = lazy(() =>
  import("../../components/seatSelectionPage/SeatSelectionPage")
);

// const Aux = (props) => props.children;
console.log("history===========>", history)
const Layout = (props) => {
  return (
    <Suspense fallback={<div>&nbsp;</div>}>
      <PageContainer history={props.history}>
        <BrowserRouter >
          <Switch>
            <Route path={Config.PATH_TO_HOME_PAGE} exact component={HOME_PAGE}></Route>
            <Route path={Config.PATH_TO_MOVIE_DETAIL_PAGE} exact component={MOVIE_DETAILS}></Route>
            <Route path={Config.PATH_TO_THEATER_PAGE} exact component={THEATER_LISTING}></Route>
            <Route path={Config.PATH_TO_SEAT_SELECTION_PAGE} exact component={SEAT_SELECTION_PAGE}></Route>

            {/*<PrivateRoute
              path={Config.PATH_TO_CREATE_USER}
              exact={true}
              component={CreateUserForm}
            />*/}
          </Switch>
        </BrowserRouter>
      </PageContainer>
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    userLoginData: state.userLoginData,
  };
};

export default Layout;
