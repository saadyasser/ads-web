// import { ICommand } from "@uiw/react-markdown-editor";

// export const newLine: ICommand = {
//   name: "newline",
//   keyCommand: "newline",
//   button: { "aria-label": "Insert new line" },
//   icon: (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" y1="5" x2="12" y2="19"></line>
//       <polyline points="19 12 12 19 5 12"></polyline>
//     </svg>
//   ),
//   execute: ({ view }) => {
//     if (!view) return;
//     const { state } = view;
//     const { selection } = state;
//     const { from, to } = selection.main;

//     view.dispatch({
//       changes: { from, to, insert: "\n" },
//       selection: { anchor: from + 1 },
//     });
//   },
// };

// export const insertTable: ICommand = {
//   name: "table",
//   keyCommand: "table",
//   button: { "aria-label": "Insert table" },
//   icon: (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//       <line x1="3" y1="9" x2="21" y2="9"></line>
//       <line x1="9" y1="21" x2="9" y2="9"></line>
//     </svg>
//   ),
//   execute: ({ state, view }) => {
//     if (!state || !view) return;

//     const { from, to } = state.selection.main;
//     const tableMarkdown = `
// | Header 1 | Header 2 |
// | -------- | -------- |
// | Text 1   | Text 2   |
// `;
//     view.dispatch({
//       changes: {
//         from,
//         to,
//         insert: tableMarkdown,
//       },
//       selection: { anchor: from + 12 }, // Move cursor to the start of the table
//     });
//   },
// };
