import * as vscode from "vscode";
import {
  createCopyFile,
  testUriJoinPath,
  testVsCodeDiffCommand,
  testVsCodeExtensionUri,
  testVsCodeOpenCommand,
  testWorkspaceFileAPI,
} from "./commands";
import { updateWorkspaceLaunchConfigs } from "./workspace-api";

namespace TestCommands {
  export const VSCODE_OPEN = "test-vscode-open";
  export const VSCODE_DIFF = "test-vscode-diff";
  export const UPDATE_LAUNCH_CONFIGS = "test-update-workspace-launch-configs";
  export const CREATE_COPY_FILE = "create-copy-file-for-diff-testing";
  export const URI_JOIN_PATH = "test-uri-join-path";
  export const WORKSPACE_FILE = "test-workspace-file";
  export const VSCODE_EXTENSION_URI = "test-vscode-extension-uri";
}

export function registerVsCodeOpenCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.VSCODE_OPEN,
    testVsCodeOpenCommand
  );
  context.subscriptions.push(disposable);
}

export function registerCreateCopyFileCommand(
  context: vscode.ExtensionContext
) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.CREATE_COPY_FILE,
    createCopyFile
  );
  context.subscriptions.push(disposable);
}

export function registerVsCodeDiffCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.VSCODE_DIFF,
    testVsCodeDiffCommand
  );
  context.subscriptions.push(disposable);
}

export function registerUriJoinPathCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.URI_JOIN_PATH,
    testUriJoinPath
  );
  context.subscriptions.push(disposable);
}

export function registerUpdateLaunchConfigsCommand(
  context: vscode.ExtensionContext
) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.UPDATE_LAUNCH_CONFIGS,
    updateWorkspaceLaunchConfigs
  );
  context.subscriptions.push(disposable);
}

export function registerWorkspaceFileCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.WORKSPACE_FILE,
    testWorkspaceFileAPI
  );
  context.subscriptions.push(disposable);
}

export function registerExtensionUriCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    TestCommands.VSCODE_EXTENSION_URI,
    () => testVsCodeExtensionUri(context)
  );
  context.subscriptions.push(disposable);
}
