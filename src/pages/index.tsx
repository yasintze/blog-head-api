import * as React from "react";
import type { HeadFC } from "gatsby";

const BlogPage = () => {
  return <h1>Blog Page</h1>;
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blog Page</title>;
