import { useEffect } from "react";
import { applyDocumentSeo, PageSeo } from "@/seo";

const Seo = ({ seo }: { seo: PageSeo }) => {
  useEffect(() => {
    applyDocumentSeo(seo);
  }, [seo]);

  return null;
};

export default Seo;
