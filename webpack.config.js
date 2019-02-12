module.exports = {
  entry: ["@babel/polyfill", "./src/app.js"], //arquivo principal,
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /|.js$/, //verifica se arquivo termina com a extensão .js,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
