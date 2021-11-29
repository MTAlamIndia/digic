import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const getRichText = (content) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType;
        const mimeGroup = mimeType.split("/")[0];
        switch (mimeGroup) {
          case "image":
            return (
              <img
                title={title ? title : null}
                alt={description ? description : null}
                src={file.url}
                style={{ width: 200 }}
              />
            );
          case "application":
            return (
              <a alt={description ? description : null} href={file.url}>
                {title ? title : file.details.fileName}
              </a>
            );
          default:
            return (
              <span style={{ backgroundColor: "red", color: "white" }}>
                {mimeType} embedded asset
              </span>
            );
        }
      },
    },
  };
  return documentToReactComponents(content, options || null);
};
