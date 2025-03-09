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
