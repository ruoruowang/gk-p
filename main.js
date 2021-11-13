const electron = require('electron');
const url = require('url');
const path = require('path');
const { protocol } = require('electron');

const {app, BrowserWindow, Menu, ipcMain} = electron

let mainWindow, dimWindow;

// listen for app to be ready
app.on('ready', function(){

    // create new window
    mainWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
    }
    });
    // load html 
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol: 'file',
        slashes: true
    }));

    // create dimeaons window
    dimWindow = new BrowserWindow({
        width: 800, 
        height:500, 
        title: "Dimeaon Window",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    dimWindow.loadURL(url.format({
        pathname: path.join(__dirname, "dimWindow.html"),
        protocol: 'file',
        slashes: true
    }));


    // build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    
    Menu.setApplicationMenu(mainMenu);



});

function createAddWindow(){
    // create new window
    atmosphereWindow = new BrowserWindow({
        width: 200,
        height: 300,
        title: 'Atmosphere'
    });
    // load html 
    atmosphereWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol: 'file',
        slashes: true
    }));
}

// catch
ipcMain.on('win', function(e, item){
    console.log(item);
    dimWindow.webContents.send('win', item);
});

const mainMenuTemplate = [
    {
        label: 'Perference',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q', 
                click(){
                    app.quit()
                } 
            }
        ]
    }
];

if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I': 'Ctrl+I', 
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}