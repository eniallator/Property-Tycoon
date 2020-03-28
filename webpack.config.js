const path = require("path");

module.exports = {
  mode: "production",
  context: path.join(__dirname),
  entry: {
    'game-data': [
      'command.ts',
      'player.ts',
      'state.ts',
      'tile.ts'
    ].map(file => `./src/game_data/${file}`),

    core: {
      import: './src/core/core.ts',
      dependOn: 'game-data'
    },

    renderer: {
      import: './src/renderer/renderer.tsx',
      dependOn: 'game-data'
    },

    engine: {
      import: './src/engine/engine.ts',
      dependOn: [ 'core', 'renderer' ]
    }
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  
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
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
