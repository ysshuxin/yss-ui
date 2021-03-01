const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          }
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader",
        options: {
          limit: 8192
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: require.resolve('../utils/markdown-loader'),
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('src'),
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
