interface ImportMetaEnv {
  readonly ASSET_URL: string;
  readonly BASE_PATH: string;
  readonly CMS_URL: string;
}

declare module "@splidejs/splide";
declare module "@splidejs/splide/css";

declare namespace App {
  interface Locals {
    pageData: import("./src/schemas/pageSchemas").PageData;
  }
}
