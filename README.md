
# Atlas - Geography Trivia Game

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

Atlas is a geography trivia game that allows users to test their knowledge about countries, capitals, and landmarks around the world. The app includes multiple quiz categories and difficulty levels to challenge players, and it features user authentication using **Clerk** and dynamic question fetching from the **Open Trivia Database (OpenTDB) API**.

## Getting Started

### Installation

First, clone the repository:

```bash
git clone https://github.com/yourusername/atlas-geography-quiz.git
```

Navigate to the project directory:

```bash
cd atlas-geography-quiz
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Before running the app, make sure to set up your environment variables by creating a `.env` file in the root directory. You need to add your **Clerk** API keys and the OpenTDB API URL:

```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api-key
CLERK_API_KEY=your-clerk-backend-api-key
NEXT_PUBLIC_OPENTDB_API_URL=https://opentdb.com/api.php
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the app by modifying `app/page.tsx`. The page auto-updates as you make changes.

### User Authentication

Atlas uses **Clerk** to handle user authentication, so users must sign up or log in to play the game and keep track of their scores.

### Quiz Questions

Quiz questions are fetched from the **Open Trivia Database (OpenTDB) API**, providing multiple categories and difficulties for users to choose from.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) for feedback and contributions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Author


- **Yeabsera Ababu**
- **Email**: yeabsera.m.ababu@vanderbilt.edu

## Features

- User authentication using **Clerk**
- Questions dynamically fetched from the **Open Trivia Database (OpenTDB) API**
- Different difficulty levels for more challenge
- Responsive design using **Tailwind CSS**
- Real-time score tracking
- Able to have more than 10 question to answer if wanted (up to 15 for boolean questions and 50 for multiple choice!)

## Reflection

While building Atlas, I learned how to integrate APIs for both authentication (Clerk) and quiz content (OpenTDB). I enjoyed developing the game logic and ensuring the app provided a seamless user experience. Given more time, I would focus on enhancing the styling and adding features like hints or more diverse question types (e.g., images or maps).I would have also looked into better api's that give better questions. This project challenged me to implement both frontend and backend skills, and I gained valuable experience in building RESTful APIs.

