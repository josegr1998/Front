import React from "react";
import sanitizeHtml from "sanitize-html";
import styles from "./RichText.module.css";

type Props = {
  contentHtml: string;
};

const transformLinks = (html: string) => {
  //enlaces que empiecen con http o https y lo abre en una pagina distinta osea pstaña. Si el link es interno no hace nada
  return html.replace(
    /<a\s+(?=[^>]*href=["']https?:\/\/)(?!.*?target=)/g, 
    '<a target="_blank" rel="noopener noreferrer" '
  );
};

export const RichText = ({ contentHtml }: Props) => {
  const sanitized = sanitizeHtml(contentHtml);
  const finalHtml = transformLinks(sanitized);

  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{ __html: finalHtml }}
    />
  );
};