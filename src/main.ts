/**
 * Main. Entrypoint of the engine
 *
 * authors: Michael K.
 */

import { Core } from "./core";
import { app, BrowserWindow } from "electron";

// Game entry point
function main() {
  const win: BrowserWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("../index.html");
}

app.whenReady().then(main);
