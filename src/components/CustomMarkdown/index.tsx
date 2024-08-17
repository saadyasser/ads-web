"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MarkdownEditor from "@uiw/react-markdown-editor";

export const CustomMarkdown: React.FC<{ content?: string }> = ({ content }) => {
  return (
    // <ReactMarkdown
    //   remarkPlugins={[remarkGfm]}
    //   rehypePlugins={[rehypeRaw]}
    //   components={{
    //     h1: ({ node, ...props }) => (
    //       <h1 className="text-2xl font-bold" {...props} />
    //     ),
    //     h2: ({ node, ...props }) => (
    //       <h2 className="text-xl font-semibold" {...props} />
    //     ),
    //     h3: ({ node, ...props }) => (
    //       <h3 className="text-lg font-medium" {...props} />
    //     ),
    //     strong: ({ node, ...props }) => (
    //       <strong className="font-bold" {...props} />
    //     ),
    //     em: ({ node, ...props }) => <em className="italic" {...props} />,
    //     p: ({ node, ...props }) => <p className="my-2" {...props} />,
    //     ul: ({ node, ...props }) => (
    //       <ul className="my-2 list-disc list-inside" {...props} />
    //     ),
    //     ol: ({ node, ...props }) => (
    //       <ol className="my-2 list-decimal list-inside" {...props} />
    //     ),
    //     blockquote: ({ node, ...props }) => (
    //       <blockquote
    //         className="pl-4 my-4 border-l-4 border-gray-300"
    //         {...props}
    //       />
    //     ),
    //     hr: ({ node, ...props }) => (
    //       <hr className="my-4 border-gray-300" {...props} />
    //     ),
    //     code: ({ node, ...props }) => (
    //       <code className="px-1 text-sm bg-gray-100 rounded" {...props} />
    //     ),
    //   }}
    // >
    //   {content}
    // </ReactMarkdown>
    <MarkdownEditor.Markdown source={content} />
  );
};

export default CustomMarkdown;
