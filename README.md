# Template Next.js + Dynamic.xyz

A Next.js template with Dynamic.xyz authentication using wallet EOAs.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id_here
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Dynamic.xyz authentication with wallet support
- Next.js 14 with App Router
- TypeScript support
- Tailwind CSS for styling
- Wagmi for Ethereum interactions
- Support for Mantle Mainnet and Testnet

## Environment Setup

To get your Dynamic Environment ID:
1. Go to [Dynamic Dashboard](https://app.dynamic.xyz/dashboard)
2. Create a new project or select existing one
3. Copy the Environment ID from the developer settings

## Learn More

- [Dynamic.xyz Documentation](https://docs.dynamic.xyz/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh/)