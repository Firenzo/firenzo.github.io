interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}

declare module "@splidejs/splide";
declare module "@splidejs/splide/css";

declare namespace App {
  interface Locals {
    pageData: import("./src/schemas/pageSchemas").PageData;
  }
}
