import { createClient } from "contentful";

// eslint-disable-next-line import/prefer-default-export
export const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_PREVIEW_API_KEY,
    host: "preview.contentful.com",
  });

  // todo needs query
  // eslint-disable-next-line consistent-return
  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cookbook",
        select: "fields",
      });

      const sanitisedEntries = entries.items.map((item) => {
        const { id } = item.sys;
        const imagePaths = item.fields.images.map(
          (image) => image.fields.file.url
        );

        return {
          ...item.fields,
          id,
          imagePaths,
        };
      });

      return sanitisedEntries;
    } catch (e) {
      console.log(e);
    }
  };
  return { getRecipes };
};
