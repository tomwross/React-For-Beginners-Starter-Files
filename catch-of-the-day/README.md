1. Run `npm install`
2. Start local development server with `npm run dev`
3. Add the following to vscode settings (user or workspace):

```
    "editor.tabSize": 4,
    "prettier.tabWidth": 4,
    "editor.formatOnSave": true,
    "emmet.showSuggestionsAsSnippets": true,
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
        // "javascript": "javascriptreact"
```

4. Re-generate `.eslint.json` if wished, not that eslint is a dependency in `react-scripts`
