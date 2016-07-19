import React from 'react';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Tiki from 'client/components/tiki';
import StaticPage from 'client/components/static-page';

export function getClientHistory(store) {
  return syncHistoryWithStore(
    require('react-router').browserHistory,
    store
  );
}

export function getServerHistory(store, url) {
  return syncHistoryWithStore(
    require('react-router').createMemoryHistory(url),
    store
  );
}

export function getRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={Tiki} />
      <Route path="/static-page" component={StaticPage} />
    </Router>
  );
}
