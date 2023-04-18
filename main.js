const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1700,
      height: 950
    })
  
    win.loadFile('page3.html')
    //mainWindow.webContents.openDevTools()
  }

app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })