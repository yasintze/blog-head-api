import * as React from "react";
import type { HeadFC } from "gatsby";

import Seo from "../components/Seo";

const BlogPage = () => {
  return <h1>Blog Page</h1>;
};

export default BlogPage;

export const Head: HeadFC = () => (
  <Seo title="Hey, I'm unique!">
    <meta name="description" content="Sample of description" />
  </Seo>
);
