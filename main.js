const { app, BrowserWindow} = require('electron')
const path = require('path');


let widgetWindow

function createWidgetWindow() {
    widgetWindow = new BrowserWindow({
        x: 10,
        y: 240,
        width: 120,
        height: 600,
        frame: false,
        transparent: true, 
        alwaysOnTop: true, 
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    widgetWindow.loadFile(path.join(__dirname, 'index.html'))


    widgetWindow.on('closed', () => {
        widgetWindow = null
    })
}

app.whenReady().then(() => {
    createWidgetWindow()

    app.on('activate', () => {
        if (widgetWindow === null) {
            createWidgetWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


