const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const http = require('http');

function waitForNextServer(url) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timeout waiting for Next.js server'));
    }, 30000); 

    const tryConnection = () => {
      const req = http.get(url, (res) => {
        clearTimeout(timeout);
        resolve();
      }).on('error', (err) => {
        console.log('Tentando conectar ao servidor Next.js...');
        setTimeout(tryConnection, 1000);
      });
    };

    tryConnection();
  });
}

async function createWindow(){
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    },
    show: false 
  });

  const startUrl = isDev
    ? 'http://localhost:3000/'
    : `file://${path.join(__dirname, '../.next/server/app/page.html')}`;

  try {
    if (isDev) {
      console.log('Aguardando servidor Next.js iniciar...');
      await waitForNextServer('http://localhost:3000');
      console.log('Servidor Next.js está pronto!');
    }
    
    console.log('Carregando URL:', startUrl);
    await mainWindow.loadURL(startUrl);
    
    mainWindow.show(); 
    
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }

    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
      console.error('Falha ao carregar:', errorDescription);
      setTimeout(() => mainWindow.reload(), 3000);
    });

  } 
  catch(error){
    console.error('Erro ao criar janela:', error);
    app.quit();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 