const { exec } = require('child_process');
const { NOTINITIALIZED } = require('dns');

function RunApp(path){
    exec(path, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

document.getElementById('vscode').addEventListener('click', function() {
    RunApp('"C:/dev/VisualStudio/Microsoft VS Code/Code.exe"');
});

document.getElementById('calc').addEventListener('click', function() {
    RunApp('"calc.exe"');
});

document.getElementById('firefox').addEventListener('click', function() {
    RunApp('"C:/Program Files/Firefox Developer Edition/firefox.exe"');
});

document.getElementById('explorer').addEventListener('click', function() {
    RunApp('"explorer.exe"');
});

document.getElementById('dev-dir').addEventListener('click', function() {
    RunApp('start "" "C:/dev/"');
});

document.getElementById('telegram').addEventListener('click', function() {
    RunApp('"D:/Programs/Telegram Desktop/Telegram.exe"');
});

