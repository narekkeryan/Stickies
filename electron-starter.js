// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const window = new BrowserWindow({
    width: 400,
    height: 400,
  });

  if (process.env.NODE_ENV === 'development') {
    window.loadURL('http://localhost:8080');
  } else {
    window.loadFile('./dist/index.html');
  }
}

app.whenReady()
  .then(createWindow)
  .catch('Failed to create Electron window.');
