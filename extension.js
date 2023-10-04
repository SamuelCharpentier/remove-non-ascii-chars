const vscode = require('vscode');
const editor = () => vscode.window.activeTextEditor;
const document = () => editor().document;

function removeAccentsInRange(range) {
	let normalizedString = document()
		.getText(range)
		.normalize('NFD');
	let accentFreeString = normalizedString.replace(
		/[^\x00-\x7F]/g,
		'',
	);
	if (normalizedString !== accentFreeString) {
		editor().edit((editBuilder) =>
			editBuilder.replace(range, accentFreeString),
		);
	}
}
function makeRange(startRange, endRange) {
	return document().validateRange(
		new vscode.Range(startRange, endRange),
	);
}

function entireFile() {
	let startPosition = new vscode.Position(0, 0);
	let endPosition = new vscode.Position(
		document().lineCount - 1,
		document().lineAt(
			document().lineCount - 1,
		).range.end.character,
	);
	return makeRange(startPosition, endPosition);
}
function activate(context) {
	console.log(
		'Congratulations, your extension "Remove non ASCII chars" is now active!',
	);

	let disposableSelectionOrFile =
		vscode.commands.registerCommand(
			'remove-non-ascii-chars.removeNonAsciiInSelectionOrFile',
			function () {
				if (!editor) {
					return; // No open text editor
				}
				if (editor().selection.isEmpty) {
					removeAccentsInRange(entireFile());
				} else {
					for (let range of editor().selections) {
						removeAccentsInRange(range);
					}
				}
				return;
			},
		);
	context.subscriptions.push(disposableSelectionOrFile);

	let disposableEntireFile =
		vscode.commands.registerCommand(
			'remove-non-ascii-chars.removeNonAsciiInEntireFile',
			function () {
				if (!editor) {
					return; // No open text editor
				}
				removeAccentsInRange(entireFile());
				return;
			},
		);

	context.subscriptions.push(disposableEntireFile);
}

function deactivate() {
	console.log(
		'"Remove non ASCII chars" is sad to see you go...',
	);
}

module.exports = {
	activate,
	deactivate,
};
