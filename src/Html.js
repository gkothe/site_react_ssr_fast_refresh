import React from 'react';

const Html = ({ children, initialState, scripts, empresa = {}, helmet }) => (
  <html>
    <head>
      {/* {helmet.meta.toComponent()} */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
        type="text/javascript"></script> */}
      <base href="/" />
      <meta charSet="UTF-8" />
      <title>{empresa.nome}</title>
      {helmet.meta.toComponent()}
    </head>
    <body>
      <div
        id="app"
        dangerouslySetInnerHTML={{ __html: children }}
      />

      {initialState && (
        <script id="scriptredux"
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(initialState)}`
          }}
        />
      )}

      {scripts.map((item, index) => <script key={index} src={item} />)}




    </body>
  </html>
);

export default Html;
