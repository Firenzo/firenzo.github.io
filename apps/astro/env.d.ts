interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}

declare namespace App {
  interface Locals {
    pageData?: unknown;
  }
}
