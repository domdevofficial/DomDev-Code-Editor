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
