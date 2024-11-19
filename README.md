# NEXTJS BOILER PLATE

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## **1. Overall Project Organization**
The project is divided into two main sections under src:
Components: Reusable components that are shared across the application.
Pages: Each page has its own folder containing UI, functionality, and combined logic specific to that page.

## **2. Components Structure**
In the `src/components` directory, components are organised based on atomic design:
- **Atoms**: The smallest UI elements, such as buttons, inputs, or labels. These handle purely visual aspects.
- **Molecules**: Combinations of atoms, representing slightly more complex UI patterns. Molecules can manage their own state or logic when the behavior is specific to the molecule (like a toggle button, slider, or dropdown).
- **Organisms**: Larger, more complex structures that combine multiple molecules and atoms. These represent significant UI components.
- **PageStructures**: Reusable layouts that can be applied across different pages.

**Important Note**: While molecules can contain their own logic (if directly tied to that specific component), **the functional and UI molecules are ultimately combined at the organism level**. Molecules handle isolated logic, but their integration happens in organisms, maintaining clean separation until that point.


## **3. Pages Structure**
Each page under `src/pages` is divided into four folders:
- **UI Folder**: Contains the visual components for the page, including atoms, molecules, and organisms. These components handle only rendering, with no business logic.
- **Functional Folder**: Manages the page-specific logic such as state management, API calls, and other business logic.
- **Molecule-level logic**: If a specific molecule needs to manage its own state (e.g., a dropdown, toggle, or slider), the state is managed within that molecule. However, all molecules’ functional logic is combined at the organism level. This keeps logic scoped but ensures clean separation when building larger UI structures.
- **Combined Folder (Organism Level Only)**: This is where **functional and UI organisms are brought together**. The **combined logic happens exclusively at the organism level**—never at the molecule or atom level. **Do not combine logic directly with UI components at lower levels.**
- **Stories Folder**: Contains Storybook stories to visually document the UI components.

## **4. The Combined Folder is ONLY for Organisms**
This point is critical: The **Combined folder exists only at the organism level and is where functional and UI organisms are brought together.**
- **Why is this important?** Keeping functional logic and UI separate until the organism level ensures scalability, clarity, and ease of maintenance. Molecules can have local state or logic, but it is still combined at the organism level to prevent messy code or mixed concerns.
- **The rule: Do not combine logic into atoms, molecules, or UI components directly.** Functional logic should only be combined with UI at the organism level within the Combined folder. This keeps the UI clean and focused on presentation, while logic remains separate and modular.

## **5. Storybook Stories**
Each component should have a corresponding Storybook story for visual documentation:
- **Reusable Components**: Use the format `Components/[Category]/[ComponentName]`.
- **Page-Specific Components**: Use the format `Pages/[PageName]/[Category]/[ComponentName]`.

Stories should cover the various states and scenarios the component might encounter, especially at the organism and page levels.

##  **6. Applying the Structure**
For each page:
- Create **UI, Functional, Combined**, and **Stories** folders.
- **The Combined folder exists ONLY at the organism level**. This is the only place where functional and UI organisms are brought together.
- **Never combine functional logic into UI components** directly. UI components handle rendering, while functional components manage logic and state. The two are only combined in the Combined folder at the organism level.

## **7. Reusability and Modularity**
To keep the project scalable and maintainable, always break down components into atoms, molecules, and organisms:
- **Atoms**: Small, reusable UI elements.
- **Molecules**: Combinations of atoms for reusable patterns. Molecules can manage their own specific state or logic but are combined at the organism level.
- **Organisms**: Larger structures made from molecules and atoms, forming more complex, reusable components.

Functional components follow the same structure. **The combination of functional and UI components happens exclusively at the organism level in the Combined folder.**

## Summary of Key Points:
- **Molecules can manage their own state or logic**, but it is combined at the organism level.
- **The Combined folder exists ONLY at the organism level** this is where functional and UI organisms are brought together.
- **Never combine logic into UI components directly** keep them separate and only integrate at the organism level.
- **Maintain a clear separation between functional and UI components** for modularity and scalability.


By strictly following this structure, the project will stay organized, modular, and maintainable, ensuring smooth scaling as it grows.

