export default {
  projectLink: "https://github.com/use-cookie-consent", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/use-cookie-consent/use-cookie-consent-docs/blob/master", // base URL for the docs repository
  titleSuffix: " – useCookieConsent",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Antoni Silvestrovič.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span style={{ marginRight: "12px", fontSize: "36px" }}>🍪</span>
      <span style={{ fontWeight: 500, fontSize: "21px" }}>
        useCookieConsent
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Headless cookie consent management" />
      <meta name="og:title" content="useCookieConsent JavaScript hook" />
    </>
  ),
};
