import React from 'react';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { SocketStatus } from './socket/SocketStatus';
import { Navigation } from './Navigation';
import { MainView } from './MainView';
import { LossLandscape } from './viewers/LossLandscape';
import './index.css';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="w-full px-4">
      <header>
        <Navigation />
      </header>

      <main className="px-2 mt-2">
        {isHome && <h1 className="text-gray-900">FastExplorer</h1>}
        <div>
          <SocketStatus />
        </div>
        <div className="mt-2">
          <Switch>
            <Route exact path={`/`}>
              <MainView />
            </Route>
            <Route path={`/loss_landscape`}>
              <LossLandscape />
            </Route>
          </Switch>
        </div>
      </main>

      <Footer url="fastexplorer-js" />
    </div>
  );
};

export const App = () => (
  <HashRouter basename="/">
    <AppContent />
  </HashRouter>
);
