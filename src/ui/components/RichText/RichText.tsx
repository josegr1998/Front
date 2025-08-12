import React from "react";
import sanitizeHtml from "sanitize-html";
import styles from "./RichText.module.css";

type Props = {
  contentHtml: string;
};

export const RichText = ({ contentHtml }: Props) => {
  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(contentHtml),
      }}
    />
  );
};
