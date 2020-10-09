
import '@babel/polyfill';
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Html from './Html';
import LoginManager, { match } from './LoginManager';
import createReduxStore from './redux/reducers/createReduxStore';
const app = express();
app.use(express.static(path.join(__dirname)));
app.get('*', async (req, res, next) => {

  if (returnnext(req)) {
    return next();
  }
  console.log("~~~~~URL~~~~" + req.method + "~~~~", req.originalUrl);

  const scripts = ["vendor.js", 'client.js'];
  const promises = [() => { return new Promise((resolve, reject) => { resolve() }) }];//fake promisse pra ter pelo menos uma pra resolver
  const store = createReduxStore({ server: true, preloadedState: { Reducer: { produto: {}, user: {}, empresa: null, carrinho: {} } } });

  let { matchedRoute, route } = match(req.path)
  if (!matchedRoute) {
    return res.send(`<!doctype html>Not found`);
  }
  if (matchedRoute && route.loadData) promises.push(store.dispatch(route.loadData({ ...matchedRoute.params })));
  return Promise.all(promises).then(() => {
    const appMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={{}}>
        <Provider store={store}>
          <LoginManager />
        </Provider>
      </StaticRouter>
    );
    const preloadedState = store.getState();
    const helmet = Helmet.renderStatic();
    const html = ReactDOMServer.renderToStaticMarkup(
      <Html
        children={appMarkup}
        helmet={helmet}
        scripts={scripts}
        initialState={preloadedState}
      />
    );


    // res.send(formatHTML(app, helmet));
    res.send(`<!doctype html>${html}`);
  });
});


function returnnext(req) {
  if (req.method == "OPTIONS") {
    return true;
  }
  if (req.originalUrl == "/favicon.ico") {
    return true;
  }
  if (req.originalUrl == "/service-worker.js") {
    return true;
  }

}
app.listen(7777, () => console.log('Listening on localhost:7777'));

