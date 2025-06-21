import React from "react";
import Markdown from "markdown-to-jsx";

interface ContentPreviewProps {
  content?: string;
}

const ContentPreview = ({ content }: ContentPreviewProps) => {
  return (
    <article className="prose prose-sm max-w-none overflow-x-auto whitespace-pre-wrap px-1 pb-12 dark:prose-invert sm:prose-base">
      <Markdown>{content ?? ""}</Markdown>
    </article>
  );
};

export default ContentPreview;
