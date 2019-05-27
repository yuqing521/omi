webpackJsonp([33],{65:function(e,n){e.exports="## TextField \n\nUser's input box, enter some content for submission to the server.\n\n## Usage\n\n```html\n<m-text-field label='Label' helper-text='helper text' ></m-text-field>\n\n<m-text-field\n  helper-text='Helper Text'\n  icon-right\n  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'\n  label='Label2'\n  css='\n    .mdc-text-field {\n      width:200px;\n    }\n  '\n></m-text-field>\n```\n\n## Usage in Omi\n\nJSX:\n\n```jsx\n<m-text-field label='Label1' helperText='Helper Text' />\n\n<m-text-field\n  helperText='Helper Text'\n  iconRight\n  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'\n  label='Label2'\n  css={`\n    .mdc-text-field { \n        width:200px;\n    }\n  `}\n/>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| full-width | boolean | -- | Use the parent element width |\n| textarea | boolean | -- | Multi-line input, and the mouse can be dragged to set the size of the input box |\n| outlined | boolean | -- | Add a border to the input box |\n| no-label | boolean | -- | The input box has no default label |\n| show-helper | boolean | true | Display help text |\n| helper-text | string | -- | Help text |\n| icon-right | boolean | -- | The icon is on the right |\n| counter | boolean | -- | Record the number of input characters, match min-length, max-length be used together |\n| path | string | -- | icon path |\n| paths | string | -- | Many icons path |\n| label | string | -- | Label defaults |\n| required | boolean | -- | Checks if the input box is empty |\n| pattern | string | -- | Input value limitation and detection |\n| min-length | number | -- | Input character minimum length, match counter be used together |\n| max-length | number | -- | Input character maximum length, match counter be used together |\n| min | number | -- |  |\n| max | number | -- |  |\n| step | number | -- |  |\n| rows | number | -- | The height of the multi-line input box, is n times the height of the line |\n| cols | number | -- |  The width of the multiline input box. The numeric value represents the width of n characters |\n| value | string | -- | Default input value |\n| disabled | boolean | -- | Input box prohibit |\n"}});
//# sourceMappingURL=33.7f9b4283.chunk.js.map