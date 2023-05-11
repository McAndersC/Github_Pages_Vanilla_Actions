const path = require('path');
const  webpack = require('webpack');
module.exports = env => ({
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: ['node_modules'],
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'build.js'
      }
  });
  