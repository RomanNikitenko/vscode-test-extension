# vscode-test-extension 

The extension allows to test `vscode.open` and `vscode.diff` commands, please see more details the corresponding commands [here](https://code.visualstudio.com/api/references/commands#commands).

At the moment it's possible to use these commands for `Theia`, but a selection is ignored at the commands' execution.

[The PR](https://github.com/eclipse-theia/theia/pull/8334) fixes signatures for `vscode.open` and `vscode.diff` commands.

Current extension contains a few commands to have an ability to test [the PR](https://github.com/eclipse-theia/theia/pull/8334).

The extension contains the following commands: 
- `Test 'vscode.open' command`
- `Test 'vscode.diff' command`
- `Test 'vscode.Uri.joinPath'`
- `Create file-copy`

The commands are availeble for running from Command Palette (F1). 

It's expected that `Theia` project is open as a workspace folder for testing.

`Test 'vscode.open' command` uses `vscode.open` command which opens `package.json` file and selects `engines` section.

`Test 'vscode.diff' command` should open the diff editor for `package.json` and `package_copy.json` files.
Please use `Create file-copy` before `Test 'vscode.diff' command` execution to have a demo for the diff editor:
- `Create file-copy` creates copy of the `package.json` file - `package_copy.json` and provides some difference in the content
- `Test 'vscode.diff' command` uses `vscode.diff` which opens the provided resources in the diff editor to compare their contents. `engines` section should be selected for the right editor.

The `Test 'vscode.Uri.joinPath'` command should just display a notification with info about path to `package.json` file. It works well for `VS Code`. But it doesn't work for `Theia` - you can see an exteption in browser console.