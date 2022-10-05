import React from "react";

type SeoProps = {
  title?: string;
  children: React.ReactNode;
};

const Seo = ({ children, title = "My website title" }: SeoProps) => (
  <>
    <title>{`Website name - ${title}`}</title>
    {children}
  </>
);

export default Seo;
