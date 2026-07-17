const shouldPreventLoadNewPage = (from: string, to: string) => {
  return (
    (from === "/creations" && to === "/") ||
    (from === "/" && to === "/creations") ||
    from === to
  );
};

export const preventPageRefreshOnNavigatingToSamePage = () => {
  const links = document.querySelectorAll("a");
  const disabledLinks: HTMLAnchorElement[] = [];

  links.forEach((link) => {
    const linkUrl = new URL(link.href);
    const linkUrlPath = linkUrl.pathname;
    if (shouldPreventLoadNewPage(window.location.pathname, linkUrlPath)) {
      disabledLinks.push(link);
    }
  });

  disabledLinks.forEach((disabledLink) => {
    disabledLink.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const disabledLinkHref = new URL(disabledLink.href);
      if (disabledLinkHref.pathname !== window.location.pathname) {
        /**
         * Astro's view transition triggers when the history state contains an object with
         * an index property (it also contains the ScrollX and ScrollY properties).
         * Therefore setting the history state to something that Astro does not expect
         * in order to NOT trigger a page animation when pressing the browser's back / forward buttons
         */
        if (!!history.state?.hasOwnProperty("index")) {
          history.replaceState(null, "", window.location.pathname);
        }
        history.pushState(null, "", disabledLinkHref.pathname);
      }
    });
  });
};
