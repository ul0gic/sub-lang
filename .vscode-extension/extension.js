const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('SUB Language Support extension is now active!');

    // Register a command for compiling SUB files
    let compileCommand = vscode.commands.registerCommand('sub.compile', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active SUB file to compile');
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'sub') {
            vscode.window.showErrorMessage('Current file is not a SUB file');
            return;
        }

        vscode.window.showInformationMessage('SUB compilation would be triggered here. Use terminal: ./sublang file.sb [language]');
    });

    context.subscriptions.push(compileCommand);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
