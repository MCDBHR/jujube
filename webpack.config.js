const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
<<<<<<< HEAD
    //fixed output so its in client / dist
    path:path.resolve(__dirname, "client", "dist"),
    filename: 'bundle.js'
=======
    path: path.join(__dirname, "/client/dist");,
    filename: 'bundle.js',
>>>>>>> main
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  }
}
