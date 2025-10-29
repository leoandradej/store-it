# StoreIt

**StoreIt** is a modern file storage and sharing web app built with **Next.js**, **TypeScript**, and **Appwrite**.  
It allows users to securely **upload**, **manage**, and **share files** through a simple, elegant, and responsive interface.

[🌐 Live Demo](https://store-it-git-main-leoandradejs-projects.vercel.app/)  
[👨🏻‍💻 Author](https://github.com/leoandradej)

---

## 🚀 Features

- 🔐 **Authentication** – Secure login and sign-up with Appwrite Auth
- ☁️ **File Uploads** – Store and manage any file type with progress tracking
- 🗃️ **File Management** – Rename, delete, and download files effortlessly
- 🔗 **File Sharing** – Generate public or private share links
- 📊 **Storage Insights** – View usage stats and recent activity
- 🧭 **Global Search** – Quickly find files by name or date
- 📱 **Responsive UI** – Optimized for desktop and mobile
- 🧩 **Modern Stack** – Built with the latest Next.js App Router

---

## 🛠️ Tech Stack

| Layer                    | Technology                     |
| ------------------------ | ------------------------------ |
| **Frontend**             | Next.js 15+, React, TypeScript |
| **Backend / Storage**    | Appwrite SDK                   |
| **Styling**              | Tailwind CSS + Shadcn/UI       |
| **Icons**                | Lucide React                   |
| **Linting / Formatting** | ESLint, Prettier               |
| **Deployment**           | Vercel (recommended)           |

---

## 📁 Project Structure

```
store-it/
├─ app/ # Next.js App Router pages and layouts
├─ components/ # Reusable UI components
├─ constants/ # Constant values and enums
├─ lib/ # Utility functions and helpers
├─ public/ # Static assets
├─ types/ # TypeScript type definitions
├─ .env.example # Environment variable template
├─ next.config.ts # Next.js configuration
├─ tsconfig.json # TypeScript configuration
└─ README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Prerequisites

Ensure you have:

- **Node.js 18+**
- **npm**, **yarn**, or **pnpm**
- An **Appwrite** project with:
  - Database
  - Storage bucket
  - API keys

---

### 2️⃣ Clone & Install

```bash
git clone https://github.com/leoandradej/store-it.git
cd store-it
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_bucket_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_KEY=your_api_key
```

---

### 4️⃣ Run Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧱 Deployment

You can deploy Store It easily with Vercel:

1. Push your code to GitHub
2. Import the repo in Vercel
3. Add all .env variables in the project settings
4. Deploy

(Alternatively, you can self-host with Appwrite Cloud and any Node server.)

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repo
2. Create your branch: git checkout -b feature/my-feature
3. Commit changes: git commit -m "Add feature"
4. Push to branch: git push origin feature/my-feature
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify.

---

## Acknowledgments

- Based on the StoreIt concept by [JavaScript Mastery](https://github.com/adrianhajdin/storage_management_solution)
- Built and improved by [Leonardo Andrade](https://github.com/leoandradej)
- Components by [shadcn/ui](https://ui.shadcn.com)

---

## Shields (Badges)

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)
