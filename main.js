const { app, BrowserWindow, Menu, shell } = require('electron')

let janelaPrincipal = null;
app.on('ready', () => {
    janelaPrincipal = new BrowserWindow({
        width: 1920,
        height: 1080,
    })
    janelaPrincipal.loadFile('app/index.html')
    Menu.setApplicationMenu(Menu.buildFromTemplate(Template))
});

const Template = [
    {
        label: 'Opções',
        submenu: [
            { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
    }
]