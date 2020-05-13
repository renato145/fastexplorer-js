import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Footer } from './Footer';
import { SocketStatus } from './socket/SocketStatus';
import { Navigation } from './Navigation';
import { MainView } from './MainView';
import { LossLandscape } from './viewers/LossLandscape';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export const BASE_URL = 'fastexplorer-js';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname.replace(/\//g, "") === BASE_URL;

  return (
    <Container className="app-container" fluid="xl">
      <header>
        <Navigation />
        { isHome && <h1 className="mt-4 mb-4">FastExplorer</h1>}
      </header>

      <main>
        <Row>
          <Col>
            <SocketStatus />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Switch>
            <Route exact path={`/${BASE_URL}/`}>
              <MainView />
            </Route>
            <Route path={`/${BASE_URL}/loss_landscape`}>
              <LossLandscape />
            </Route>
          </Switch>
        </Row>
      </main>

      <Footer url="fastexplorer-js" />
    </Container>
  );
};

export const App = () => (
  <Router>
    <AppContent />
  </Router>
);
