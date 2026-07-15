interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}

declare namespace App {
  interface Locals {
    pageData: import("./src/schemas/pageSchemas").PageData;
  }
}
