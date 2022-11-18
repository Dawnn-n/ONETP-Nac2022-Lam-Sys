const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        frame: false,
        backgroundColor: '#acf',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        }
    })
  
    win.loadURL('http://localhost:3000')
    win.maximize()
}

app.whenReady().then(() => {
    createWindow()
    if (process.platform === 'darwin') app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})