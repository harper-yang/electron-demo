import {app, BrowserWindow} from "electron";

function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow)
