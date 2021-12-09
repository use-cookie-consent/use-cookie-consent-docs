(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{9602:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packages/core",function(){return o(6554)}])},7845:function(e,n,o){"use strict";var s=o(5893);n.Z={projectLink:"https://github.com/use-cookie-consent",docsRepositoryBase:"https://github.com/use-cookie-consent/use-cookie-consent-docs/blob/master",titleSuffix:" \u2013 useCookieConsent",nextLinks:!0,prevLinks:!0,search:!0,customSearch:null,darkMode:!0,footer:!0,footerText:"MIT ".concat((new Date).getFullYear()," \xa9 Antoni Silvestrovi\u010d."),footerEditLink:"Edit this page on GitHub",logo:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{style:{marginRight:"12px",fontSize:"36px"},children:"\ud83c\udf6a"}),(0,s.jsx)("span",{style:{fontWeight:500,fontSize:"21px"},children:"useCookieConsent"})]}),head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{name:"description",content:"Headless cookie consent management"}),(0,s.jsx)("meta",{name:"og:title",content:"useCookieConsent JavaScript hook"})]})}},6554:function(e,n,o){"use strict";o.r(n);var s=o(5893),i=o(7829),c=o.n(i),t=o(3805),r=o(7845),l=o(1127),a=o.n(l),d=function(e){return(0,t.withSSG)(c()({filename:"core.mdx",route:"/packages/core",meta:{},pageMap:[{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction"}},{name:"packages",children:[{name:"core",route:"/packages/core"},{name:"meta.json",meta:{core:"core",react:"react"}},{name:"react",route:"/packages/react"}],route:"/packages"}]},r.Z))(e)};n.default=function(e){var n=void 0===e?{}:e,o=function(){var e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a",em:"em"},n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{children:"Framework agnostic useCookieConsent hook"}),"\n",(0,s.jsx)(e.h2,{children:"Intro"}),"\n",(0,s.jsx)(e.h2,{children:"Install"}),"\n",(0,s.jsx)(e.p,{children:"Using yarn:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"yarn add @use-cookie-consent/core\n"})}),"\n",(0,s.jsx)(e.p,{children:"Using npm:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npm install @use-cookie-consent/core\n"})}),"\n",(0,s.jsx)(e.h2,{children:"Usage"}),"\n",(0,s.jsx)(e.p,{children:"Below you can see the most basic usage:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:'import { useCookieConsent } from "@use-cookie-consent/core";\n\nexport const YourComponent = () => {\n  const { consent, acceptAllCookies, declineAllCookies } = useCookieConsent();\n\n  // JSX example, but any JS UI libary can be used.\n  return (\n    <>\n      <h2>\n        Third party cookies {consent.thirdParty ? "accepted" : "declined"}\n      </h2>\n      <button onClick={acceptAllCookies}>Accept all</button>\n      <button onClick={declineAllCookies}>Decline all</button>\n    </>\n  );\n};\n'})}),"\n",(0,s.jsx)(a(),{emoji:"\u26a0\ufe0f",children:(0,s.jsxs)(e.p,{children:["Note that this approach does not inform other ",(0,s.jsx)(e.code,{children:"useCookieConsent"})," invocations\nabout a change. This means that if you have two ",(0,s.jsx)(e.code,{children:"useCookieConsent"})," functions,\nthey will have the same state, but if you run ",(0,s.jsx)(e.code,{children:"acceptAllCookies"})," on one of\nthem, the other will not be updated without a page refresh, or re-running the\nfunction. ",(0,s.jsx)("br",{}),"\nIf you need to use this function aross different components you should use utilities\nprovided in one of the library-specific packages."]})}),"\n",(0,s.jsx)(e.h2,{children:"API"}),"\n",(0,s.jsxs)(e.h3,{children:[(0,s.jsx)(e.code,{children:"useCookieConsent"})," hook"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Arguments"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"options?: CookieConsentOptions"})," - Configuration object:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"defaultConsent?: CookieConsent"})," - The optional initial state of the cookie consent hook."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"consentCookieAttributes?: CookieAttributes"})," - Attributes for the underlying ",(0,s.jsx)(e.code,{children:"js-cookie"})," package, more info ",(0,s.jsx)(e.a,{href:"https://github.com/js-cookie/js-cookie",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"consent: CookieConsent"})," - Cookie consent state:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"session?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"duration"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"persistent?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"duration"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"necessary?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"purpose"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"preferences?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"purpose"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"statistics?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"purpose"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"marketing?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"purpose"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"firstParty?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"provenance"'})," cookie class."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"thirdParty?: boolean;"})," - Part of ",(0,s.jsx)(e.em,{children:'"provenance"'})," cookie class."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"acceptCookies: (cookies: CookieTypes) => void;"})," - Accept specified cookies."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"declineAllCookies: () => void;"})," - Decline all cookies."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"acceptAllCookies: () => void;"})," - Accept all cookies."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"didAcceptAll: () => boolean;"})," - Check whether all cookies are accepted."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"didDeclineAll: (opts?: { includingNecessary: boolean; }) => boolean;"})," - Check whether all cookies were declined, with ",(0,s.jsx)(e.code,{children:"necessary"})," not counting by default."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"cookies: CookieWrapper;"})," - Wrapper around ",(0,s.jsx)(e.code,{children:"js-cookie"})," with matching API."]}),"\n"]}),"\n"]}),"\n"]})]})};return d?(0,s.jsx)(d,Object.assign({},n,{children:(0,s.jsx)(o,{})})):o()}},1127:function(e,n,o){e.exports=o(3952)},3952:function(e,n,o){var s,i=(s=o(7294))&&"object"===typeof s&&"default"in s?s.default:s;const c={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"};e.exports=({children:e,type:n="default",emoji:o="\ud83d\udca1"})=>i.createElement("div",{className:`${c[n]} flex rounded-lg callout mt-6`},i.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},o),i.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[511,774,888,179],(function(){return n=9602,e(e.s=n);var n}));var n=e.O();_N_E=n}]);