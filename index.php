<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Code Editor</title>
    <link rel="stylesheet" href="style.css">
    <script src="ace.js"></script>
</head>
<body>

    <div class="container">
        <h2>Online Code Editor</h2>

        <div class="controls">
            <button id="runBtn">▶ Run</button>
            <button id="clearBtn">🗑 Clear</button>
            <button id="copyBtn">📋 Copy</button>
            <button id="darkModeBtn">🌙 Dark Mode</button>
        </div>

        <div class="editor-wrapper">
            <div id="editor"></div>
        </div>

        <h3>Live Preview</h3>
        <div class="preview-container">
            <iframe id="preview"></iframe>
        </div>
    </div>

    <footer>Powered by: DomDev</footer>

    <script src="script.js"></script>
</body>
</html>
