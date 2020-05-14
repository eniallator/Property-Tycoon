const path = require("path");
/*
const baseConfig = (mode, target, folder) => ({
  target: target,
  mode: mode,
  context: path.join(__dirname),
  entry: {
    "game-data": ["command.ts", "player.ts", "state.ts", "tile.ts"].map(
      (file) => `./src/game_data/${file}`
    ),

    core: {
      import: "./src/core/core.ts",
      dependOn: "game-data",
    },

    renderer: {
      import: "./src/renderer/renderer.tsx",
      dependOn: "game-data",
    },

    engine: {
      import: "./src/engine/engine.ts",
      dependOn: ["core", "renderer"],
    },
  },

  output: {
    path: path.resolve(__dirname, "dist", folder),
    filename: "[name].js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },

  target: "electron-renderer",
});

// Setup test config
const testConfig = baseConfig("development", "node", "build")
testConfig.entry = {
  "command": "./src/game_data/command.ts",
  "response": "./src/game_data/response.ts",
  "player": "./src/game_data/player.ts",
  "tile": "./src/game_data/tile.ts",
  "state": "./src/game_data/state.ts"
}
*/

module.exports = {
  target: "electron-renderer",
  mode: "production",
  context: path.join(__dirname),

  entry: "./build/engine/engine.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "engine.bundle.js"
  },

  module: {
    rules: [
      {
        // SASS
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        // CSS
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Images
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
      },
      {
        // Source maps
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
}