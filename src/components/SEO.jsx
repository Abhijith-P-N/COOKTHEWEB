import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
    }
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }
  }, [title, description, canonical, location]);

  return null;
};

export default SEO;
