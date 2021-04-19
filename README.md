# vscode-test-extension 

The extension contains the following commands: 
- `Test 'vscode.open' command`
- `Test 'vscode.diff' command`
- `Test 'vscode.Uri.joinPath'`
- `Create file-copy`
- `Test update Workspace launch configurations`
- `Test 'vscode.workspace.workspaceFile'`
- `Test 'storageUri' from 'vscode.ExtensionContext'`
- `Test 'globalStorageUri' from 'vscode.ExtensionContext'`
- `Test 'extensionUri' from 'vscode.ExtensionContext'`
- `Test 'workbench.action.files.openFileFolder'`

The commands are available for running from Command Palette (F1).

## 'vscode.open' and 'vscode.diff' commands
The extension allows to test `vscode.open` and `vscode.diff` commands, please see more details the corresponding commands [here](https://code.visualstudio.com/api/references/commands#commands).

At the moment it's possible to use these commands for `Theia`, but a selection is ignored at the commands' execution.

[The PR](https://github.com/eclipse-theia/theia/pull/8334) fixes signatures for `vscode.open` and `vscode.diff` commands.

Current extension contains a few commands to have an ability to test [the PR](https://github.com/eclipse-theia/theia/pull/8334).

It's expected that `Theia` project is open as a workspace folder for testing the following commands:

`Test 'vscode.open' command` uses `vscode.open` command which opens `package.json` file and selects `engines` section.

`Test 'vscode.diff' command` should open the diff editor for `package.json` and `package_copy.json` files.
Please use `Create file-copy` before `Test 'vscode.diff' command` execution to have a demo for the diff editor:
- `Create file-copy` creates copy of the `package.json` file - `package_copy.json` and provides some difference in the content
- `Test 'vscode.diff' command` uses `vscode.diff` which opens the provided resources in the diff editor to compare their contents. `engines` section should be selected for the right editor.

## 'vscode.Uri.joinPath'
The `Test 'vscode.Uri.joinPath'` command should just display a notification with info about path to `package.json` file. It works well for `VS Code`. But it doesn't work for `Theia` - you can see an exteption in browser console.

## Update Workspace launch configurations
The `Test: Update Workspace launch configurations` command should: 
- add new test Workspace-scoped launch configuration to workspace config file if there is no configurations defined
- replace existed Workspace-scoped launch configurations by test launch config if there is at least one configuration defined in workspace config file

The new test configuration should be available for running from `Debug` panel.

`Note:` it's expected that multi-root workspace from a config file is open for testing

## 'vscode.workspace.workspaceFile'
The `Test 'vscode.workspace.workspaceFile'` command should just display a notification with info about path to current workspace config file (like: `/some/path/testVsCodeWorkspace.code-workspace`). It works well for `VS Code`. But for `Theia` - it's `undefined`.

`Note:` it's expected that multi-root workspace from a config file is open for testing

## 'context.extensionUri' from 'context: vscode.ExtensionContext'
The `Test 'extensionUri' from 'vscode.ExtensionContext'` command should just display a notification with the path to the current test extension

## 'context.storageUri' from 'context: vscode.ExtensionContext'
The `Test 'storageUri' from 'vscode.ExtensionContext'` command should just display a notification with the storage Uri

## 'context.globalStorageUri' from 'context: vscode.ExtensionContext'
The `Test 'globalStorageUri' from 'vscode.ExtensionContext'` command should just display a notification with the global storage Uri

## 'workbench.action.files.openFileFolder'
The `Test 'workbench.action.files.openFileFolder'` command should display a dialog which allows to open a file or a directory 

## `keybindings` contribution.
To test `keybindings`:

- open a file
- set cursor in any place of the file
- press `alt+7` in the text editor

The expected behavior: `some arguments from keybinding` text should be inserted.
