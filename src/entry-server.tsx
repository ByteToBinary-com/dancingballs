import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import { getPageSeo, prerenderRoutes } from "./seo";

export { prerenderRoutes };

export const render = (url: string) => {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );

  return {
    appHtml,
    seo: getPageSeo(url),
  };
};
