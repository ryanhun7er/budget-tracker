var WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require("path");

const config = {
    entry: {
      app: "./server.js",
      },
      output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
      },
      mode: "development",
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
      plugins: [
        new WebpackPwaManifest({
          name: 'Budget Tracker',
          short_name: 'MyPWA',
          description: 'Budget Tracker',
          background_color: '#ffffff',
          crossorigin: 'null', //can be null, use-credentials or anonymous
          icons: [
            {
              src: path.resolve('/icons/icon-192x192.png'),
              size: '192x192' 
            },
            {
              src: path.resolve('/icons/icon-512x512.png'),
              size: '512x512' 
            },
          ]
        })
      ]    
      
}

