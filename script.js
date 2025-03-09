/*
 * Copyright 2025 DomDev
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at:
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Code Editor</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
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
    var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
editor.setOptions({
    fontSize: "16px",
    wrap: true,
    useWorker: false,
    showPrintMargin: false
});

if (localStorage.getItem("savedCode")) {
    editor.setValue(localStorage.getItem("savedCode"), -1);
} else {
    editor.setValue(`<!DOCTYPE html>
<html>
<head>
    <title>Live Preview</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <script>
        console.log("Hello from JavaScript!");
    </script>
</body>
</html>`, -1);
}

editor.session.on('change', function() {
    localStorage.setItem("savedCode", editor.getValue());
    updatePreview();
});

function updatePreview() {
    var code = editor.getValue();
    var iframe = document.getElementById("preview").contentWindow.document;
    iframe.open();
    iframe.write(code);
    iframe.close();
}

function clearEditor() {
    editor.setValue("");
    localStorage.removeItem("savedCode");
    updatePreview();
}

function copyToClipboard() {
    var code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    editor.setTheme(document.body.classList.contains("dark-mode") ? "ace/theme/twilight" : "ace/theme/monokai");
}

document.getElementById("runBtn").addEventListener("click", updatePreview);
document.getElementById("clearBtn").addEventListener("click", clearEditor);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);
document.getElementById("darkModeBtn").addEventListener("click", toggleDarkMode);

updatePreview();
