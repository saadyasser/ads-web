// "use client";
// import React from "react";
// import MarkdownEditorComponent from "@uiw/react-markdown-editor";
// import { useFormContext, Controller } from "react-hook-form";
// import { insertTable, newLine } from "./CustomTools";

// interface MarkdownEditorProps {
//   name: string;
//   label?: string;
// }

// export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
//   name,
//   label,
// }) => {
//   const { control } = useFormContext();
//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={{ required: "This field is required." }}
//       render={({ field, fieldState }) => (
//         <div>
//           {label && (
//             <label className="text-black dark:text-white text-sm/6">
//               {label}
//               <span className="text-primary dark:text-danger">*</span>
//             </label>
//           )}
//           <MarkdownEditorComponent
//             value={field.value || ""}
//             onChange={(value) => field.onChange(value)}
//             style={{ height: "300px" }}
//             visible
//             toolbars={[
//               "undo",
//               "redo",
//               "bold",
//               "italic",
//               "header",
//               "strike",
//               "underline",
//               "quote",
//               "olist",
//               "ulist",
//               "todo",
//               "link",
//               "image",
//               "code",
//               "codeBlock",
//               newLine,
//               insertTable,
//             ]}
//           />
//           {fieldState.error && (
//             <p className="mt-2 text-sm text-danger">
//               {fieldState.error.message}
//             </p>
//           )}
//         </div>
//       )}
//     />
//   );
// };

// export default MarkdownEditor;
