import React from "react";
import sanitizeHtml from "sanitize-html";
import styles from "./RichText.module.css";

type Props = {
  contentHtml: string;
};

export const RichText = ({ contentHtml }: Props) => {
 /* return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(contentHtml),
      }}
    />
  );
};
*/
const sanitized = sanitizeHtml(contentHtml, {
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href || "";

        
        if (/^https?:\/\//i.test(href)) {
          const rel = attribs.rel ? `${attribs.rel} noopener noreferrer` : "noopener noreferrer";
          return {
            tagName: "a",
            attribs: { ...attribs, target: "_blank", rel },
          };
        }

        return { tagName: "a", attribs };
      },
    },
  });

  return <div className={styles.richText} dangerouslySetInnerHTML={{ __html: sanitized }} />;
};