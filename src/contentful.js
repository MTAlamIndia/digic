import { createClient } from "contentful";

export const client = createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS,
});
