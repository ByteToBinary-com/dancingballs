import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import { getPageSeo, prerenderRoutes } from "./seo";
import { ROUTER_BASENAME } from "./site";

export { prerenderRoutes };

export const render = (url: string) => {
  const routerUrl =
    ROUTER_BASENAME === "/"
      ? url
      : `${ROUTER_BASENAME}${url === "/" ? "" : url}`;

  const appHtml = renderToString(
    <StaticRouter location={routerUrl} basename={ROUTER_BASENAME}>
      <AppShell />
    </StaticRouter>,
  );

  return {
    appHtml,
    seo: getPageSeo(url),
  };
};
