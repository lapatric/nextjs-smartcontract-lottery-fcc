This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Using web3uikit
Install  using ```yarn add web3uikit```.

## Styling with TailwindCSS
The following instructions are derived from the [TailwindCSS documentation](https://tailwindcss.com/docs/guides/nextjs).

```bash
yarn add --dev tailwindcss postcss autoprefixer

yarn tailwindcss init -p # generates posts.config.js and tailwind.config.js
```
Now overwrite tailwind.config.js with code from step three in the [TailwindCSS documentation](https://tailwindcss.com/docs/guides/nextjs). Next, overwrite the code in styles/global.css with code from step four.

Finally, we can add styles to our divs, headers etc. by adding specific classNames (view [examples](https://tailwindcss.com/docs/border-widthTo)). Multiple different styles can be added to a single element by adding spaces in-between, e.g.,

```html
<div className="p-5 border-b-2 flex flex-row”>…</div>
````

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy in a decentralized manner (IPFS)
An easy service to upload and host your website in a decentralized manner using IPFS is offered by https://fleek.co/.
Watch the tutorial for more details here: https://youtu.be/gyMwXuJrbJQ?t=65598