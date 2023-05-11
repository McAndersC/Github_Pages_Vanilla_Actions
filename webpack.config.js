const path = require('path');
module.exports = env => ({
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: ['node_modules'],
    },
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
  