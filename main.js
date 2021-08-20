const {app, BrowserWindow, ipcMain} = require ('electron');

app.on('ready', () => {
  console.log('Application started!');
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 600,
    height: 400
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

});

app.on('window-all-closed', () => {
  app.quit();
});

let sobreWindow = null;

ipcMain.on('abrir-janela-sobre', () => {
  if(sobreWindow == null){
    sobreWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      width: 300,
      height: 220,
      alwaysOnTop: true,
      frame: false
    });
    sobreWindow.on('closed', ()=>{
      sobreWindow = null;
    });
  }
  sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () =>{
  sobreWindow.close();
});