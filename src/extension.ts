import * as vscode from "vscode";
import {
  registerCreateCopyFileCommand,
  registerExtensionUriCommand,
  registerOpenFileFolderCommand,
  registerUpdateLaunchConfigsCommand,
  registerUriJoinPathCommand,
  registerVsCodeDiffCommand,
  registerVsCodeOpenCommand,
  registerWorkspaceFileCommand,
} from "./commands-registry";

export function activate(context: vscode.ExtensionContext) {
  registerVsCodeOpenCommand(context);
  registerCreateCopyFileCommand(context);
  registerVsCodeDiffCommand(context);
  registerUriJoinPathCommand(context);
  registerUpdateLaunchConfigsCommand(context);
  registerWorkspaceFileCommand(context);
  registerExtensionUriCommand(context);
  registerOpenFileFolderCommand(context);
}

export function deactivate() {}
