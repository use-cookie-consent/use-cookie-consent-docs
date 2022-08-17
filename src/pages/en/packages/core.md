---
title: "@use-cookie-consent/core"
description: The framework agnostic version of use-cookie-consent hook.
layout: ../../../layouts/MainLayout.astro
---

## Install

Using yarn:

```
yarn add @use-cookie-consent/core
```

Using npm:

```
npm install @use-cookie-consent/core
```

## Usage

Below you can see the most basic usage:

```jsx
import { useCookieConsent } from "@use-cookie-consent/core";

export const YourComponent = () => {
  const { consent, acceptAllCookies, declineAllCookies } = useCookieConsent();

  // JSX example, but any JS UI libary can be used.
  return (
    <>
      <h2>
        Third party cookies {consent.thirdParty ? "accepted" : "declined"}
      </h2>
      <button onClick={acceptAllCookies}>Accept all</button>
      <button onClick={declineAllCookies}>Decline all</button>
    </>
  );
};
```

> ⚠️ **Note that** this approach does not inform other `useCookieConsent` invocations about a change. This means that if you have two `useCookieConsent` functions, they will have the same state, but if you run `acceptAllCookies` on one of them, the other will not be updated without a page refresh, or re-running the function. <br />If you need to use this function aross different components you should use utilities provided in one of the library-specific packages.

## API

### `useCookieConsent` hook

- **Arguments**:
  - `options?: CookieConsentOptions` - Configuration object:
    - `defaultConsent?: CookieConsent` - The optional initial state of the cookie consent hook.
    - `consentCookieAttributes?: CookieAttributes` - Attributes for the underlying `js-cookie` package, more info [here](https://github.com/js-cookie/js-cookie).
- **Returns**:
  - `consent: CookieConsent` - Cookie consent state:
    - `session?: boolean;` - Part of _"duration"_ cookie class.
    - `persistent?: boolean;` - Part of _"duration"_ cookie class.
    - `necessary?: boolean;` - Part of _"purpose"_ cookie class.
    - `preferences?: boolean;` - Part of _"purpose"_ cookie class.
    - `statistics?: boolean;` - Part of _"purpose"_ cookie class.
    - `marketing?: boolean;` - Part of _"purpose"_ cookie class.
    - `firstParty?: boolean;` - Part of _"provenance"_ cookie class.
    - `thirdParty?: boolean;` - Part of _"provenance"_ cookie class.
  - `acceptCookies: (cookies: CookieTypes) => void;` - Accept specified cookies.
  - `declineAllCookies: () => void;` - Decline all cookies.
  - `acceptAllCookies: () => void;` - Accept all cookies.
  - `didAcceptAll: () => boolean;` - Check whether all cookies are accepted.
  - `didDeclineAll: (opts?: { includingNecessary: boolean; }) => boolean;` - Check whether all cookies were declined, with `necessary` not counting by default.
  - `cookies: CookieWrapper;` - Wrapper around `js-cookie` with matching API.
