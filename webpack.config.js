const path = require("path");

module.exports = {
  mode: "production",
  context: path.join(__dirname),
  entry: {
    engine: './src/engine/engine.ts',
    gui: './src/index.tsx'
  },
  // Removed since it's too general. We need to build the engine and gui separately for both
  // testing and organizational purposes
  /*output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },*/

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  target: "node",
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
