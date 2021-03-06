---
title: "@use-cooke-consent/react"
description: The React.js version of use-cookie-consent hook.
layout: ../../../layouts/MainLayout.astro
---

## Install

Using yarn:

```bash
yarn add @use-cookie-consent/react
```

Using npm:

```bash
npm install @use-cookie-consent/react
```

## Usage

**Step 1** - wrap your app in a `<CookieConsentProvider>`.
In a Next.js app this would go into `_app.js` file.

```jsx
import { CookieConsentProvider } from '@use-cookie-consent/react'

export default function App() {
  return {
    <CookieConsentProvider>
      ...
    </CookieConsentProvider>
  }
}
```

**Step 2** - use the `useCookieConsentContext` hook in any component that is wrapped into the `<CookieConsentProvider>`:

```jsx
// This component is an example of a component that you use to
// accept/decline cookie consent, without reading any data.
const CookieBanner = () => {
  const { acceptAllCookies, declineAllCookies, acceptCookies } =
    useCookieConsentContext();

  return (
    <div>
      <button onClick={acceptAllCookies}>Accept all</button>
      <button onClick={() => acceptCookies({ thirdParty: true })}>
        Accept third-party
      </button>
      <button onClick={() => acceptCookies({ firstParty: true })}>
        Accept first-party
      </button>
      <button onClick={declineAllCookies}>Reject all</button>
    </div>
  );
};
```

```jsx
// This component is an example of a component which would show
// the state of the cookie consent, without updating anything.
const CookiesPreview = () => {
  const { consent } = useCookieConsentContext();

  return (
    <div>
      <div>
        {`Third-party cookies ${consent.thirdParty ? "approved" : "rejected"}`}
      </div>
      <div>
        {`First-party cookies ${consent.firstParty ? "approved" : "rejected"}`}
      </div>
    </div>
  );
};
```

## API
