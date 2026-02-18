/**
 * landing router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::landing.landing", {
  config: {
    find: {
      middlewares: ["global::global-page-populate"],
    },
  },
});
