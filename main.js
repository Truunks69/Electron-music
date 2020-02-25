const {app, BrowserWindow} = require('electron');
let win,
    path=require('path');
app.on('ready', function(){
    win=new BrowserWindow({
        webPreferences: {
            preload: path.join(app.getAppPath(), 'js/preload.js'),
            webSecurity: true
        }
    })
    win.setMenuBarVisibility(false)
    win.loadURL('file://' + __dirname + '/index.html')
    win.on('closed', () => {
        win = null
    })
})
app.on('window-all-closed', () =>{
    app.quit()
})