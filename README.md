# ✨ My Portfolio Website

This repository contains my personal portfolio website, built using a monorepo structure powered by [Turborepo](https://turbo.build/). This setup allows for efficient development across multiple related applications and shared code packages.

## 🚀 Structure Overview

The project uses the following directory structure:

*   **`/apps`**: Contains the main applications for the website.
    *   **`astro`**: The primary frontend application, built with Astro. This is where the core portfolio content will be displayed.
    *   **`cms`**: The Content Management System (CMS) backend, running on Strapi. All dynamic site data and administrative content are managed here.

*   **`/packages`**: Houses reusable code modules and dependencies that support both the CMS and frontend applications.
    *   **Strapi Plugins**: Includes dedicated packages for enhancing Strapi functionality, such as `json-field`, `array-field`, and `icon-field`.
    *   **Icon Package**: The `iconSet` package provides a specialized icon library ensuring consistent and scalable usage of icons across all apps and other components within the monorepo.

## ⚙️ Development Workflow

### Prerequisites

Before starting development, ensure you have the following installed:

*   Node.js (LTS recommended)
*   pnpm / yarn
*   Strapi CLI (for CMS setup)

### Running the Project

To set up and run all services locally, please follow these steps:

1.  **Install Dependencies:**
    \`\`\`bash
    pnpm install # or yarn install
    \`\`\`

2.  **Start Services:**
    You can start individual components or the entire stack (e.g., using \`turbo dev\` if configured).
    *   To run the frontend: \`pnpm --filter astro dev\`
    *   To run the CMS backend: \`pnpm cms develop\`

## 🧱 Key Features & Technologies

- **Headless CMS:** Strapi provides a powerful, customizable API for managing content without coupling the frontend code.
- **Modern Frontend:** Astro ensures blazing-fast performance and excellent developer experience for static site generation.
- **Monorepo Management:** Turborepo optimizes build times, caching, and task running across all contained services (CMS, Frontend, Libraries).

## 💡 Contributing

Feel free to explore the packages or open a pull request! Please ensure you run \`pnpm test\` before submitting any changes.