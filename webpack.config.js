const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: path.resolve(__dirname, '../src'),
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      tslint: path.resolve(__dirname, '../tslint.json')
    })
  ],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') })
    ]
  }
};
