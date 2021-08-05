import * as vscode from "vscode";
import {
  registerCreateCopyFileCommand,
  registerExtensionUriCommand,
  registerStorageUriCommand,
  registerGlobalStorageUriCommand,
  registerOpenFileFolderCommand,
  registerUpdateLaunchConfigsCommand,
  registerUriJoinPathCommand,
  registerVsCodeDiffCommand,
  registerVsCodeOpenCommand,
  registerWorkspaceFileCommand,
  registerGetTasksExecutionsCommand,
  registerTerminateTaskUsingExecutionCommand
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
  registerStorageUriCommand(context);
  registerGlobalStorageUriCommand(context);
  registerGetTasksExecutionsCommand(context);
  registerTerminateTaskUsingExecutionCommand(context);
}

export function deactivate() {}
