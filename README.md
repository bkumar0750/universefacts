# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Vercel Web Analytics

The app uses `@vercel/analytics` with React Router route tracking. Vercel's SPA rewrite also serves the app entry point for direct links to client-side routes. After deploying to Vercel, open the UniverseFacts project, select **Analytics**, and choose **Enable** for the **Production** environment. Deploy again if prompted. The dashboard provides visitors, page views, top pages and referrers, and visitor breakdowns; use its date-range selector to compare periods.

Custom events record search submissions without query text, search result categories, navigation categories, contact form submission, space-content interactions, and external or social-link hostnames. No email addresses, names, message contents, or full external URLs are sent. The current site has no newsletter, bookmarks/favorites, share buttons, or download flow to track.

See the [Vercel Web Analytics documentation](https://vercel.com/docs/analytics) for dashboard and data-export details.



 