![img.png](https://raw.githubusercontent.com/bhf/aeron-cache/refs/heads/main/docs/images/header.png)

[![CI](https://github.com/bhf/aeron-cache-starter-nextjs/actions/workflows/ci.yml/badge.svg)](https://github.com/bhf/aeron-cache-starter-nextjs/actions/workflows/ci.yml)

# Aeron Cache Next.js Starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured for **Aeron Cache Embedded**.

## Prerequisites

This project uses private packages from GitHub Packages. To install dependencies, you need:

1. A GitHub Personal Access Token (PAT) with `read:packages` scope.
2. An `.npmrc` file configured with your token.

### Setup `.npmrc`

Copy the template and replace `YOUR_GITHUB_PAT_HERE` with your token:

```bash
cp .npmrc.example .npmrc
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
