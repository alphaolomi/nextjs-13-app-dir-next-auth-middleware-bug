## bug reproduction

### steps to reproduce
- Create new Next.js app using CNA `create-next-app --version => 13.4.4`
- Add `next-auth` `"next-auth": "4.22.1",`
- Configure Credentials provider `app/api/auth/[...nextauth].ts`
- Configure Middleware see https://next-auth.js.org/configuration/nextjs#middleware
- `yarn run build`

Note: All variants of the following middleware configuration fail.

```ts
export { default } from "next-auth/middleware"
```

```ts
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }
```

```ts
import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
)

export const config = { matcher: ["/admin"] }
```

### expected behavior

- build succeeds

### actual behavior

- build fails with error

```bash
> yarn run build
Failed to compile.

./node_modules/.pnpm/next-auth@4.22.1_next@13.4.4_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/next/middleware.js
Module parse failed: Identifier 'NextResponse' has already been declared (3:6)
File was processed with these loaders:
 * ./node_modules/.pnpm/next@13.4.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-swc-loader.js
You may need an additional loader to handle the result of these loaders.
| "use strict";
| const NextResponse = require("next/dist/server/web/spec-extension/response").NextResponse;
> const NextResponse = require("next/dist/server/web/spec-extension/response").NextResponse;
| var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
| Object.defineProperty(exports, "__esModule", {

Import trace for requested module:
./node_modules/.pnpm/next-auth@4.22.1_next@13.4.4_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/next/middleware.js
./node_modules/.pnpm/next-auth@4.22.1_next@13.4.4_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/middleware.js


> Build failed because of webpack errors
error Command failed with exit code 1.   
```

### Env info

- `envinfo --system --binaries --browsers --npmPackages "next,react,next-auth,@auth/*"`

```yaml

  System:
    OS: macOS 13.4
    CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz
    Memory: 44.16 MB / 8.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 20.2.0 - /usr/local/bin/node
    Yarn: 1.22.19 - /usr/local/bin/yarn
    npm: 9.6.7 - /usr/local/bin/npm
  Browsers:
    Brave Browser: 114.1.52.122
    Chrome: 113.0.5672.126
    Edge: 110.0.1587.63
    Safari: 16.5


```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
