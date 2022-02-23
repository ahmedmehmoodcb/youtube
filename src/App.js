import Header from "./Component/Header/myHeader";
import SlideBar from "./Component/SlideBar/mySlideBar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Component/HomeScreen/myHomeScreen";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "./Component/HomeScreen/login/login";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./Component/HomeScreen/watchScreen/watchScreen";
import "./App.css";
const Layout = ({ children }) => {
  const [slideBar, ToogleSlideBar] = useState(true);
  const handleToggleSidebar = () => ToogleSlideBar((value) => !value);

  return ( 
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container  border-info">
        <SlideBar
        className="slide"
          slideBar={slideBar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app__main">
          {children}
          {/* <HomeScreen /> */}
        </Container>
      </div>
    </>
  );
};
function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth" exact>
        <Login />
      </Route>

      <Route path="/search" exact>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>
      <Route path='/watch/:id'>
        <Layout>
          <WatchScreen/>
        </Layout>
      </Route>

      
      <Route>
        <Redirect to="/" exact />
      </Route>

    </Switch>
  );
}

export default App;
