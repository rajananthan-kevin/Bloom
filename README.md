This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Projet d'affichage d'offres d'emploi

## Introduction
Ce projet est une application web construite avec Next.js, qui permet d'afficher des listes d'offres d'emploi sur une page et d'afficher les détails d'une offre spécifique sur une autre page. Ce projet utilise AppRouter de Next.js pour la navigation entre les pages.

## Structure du projet
Le projet est organisé comme suit :

- **api/**
  - **jobServices.ts** : Contient tous les appels API.

- **app/routes/**
  - **root/** : Page principale qui affiche la liste des offres d'emploi ainsi que les composants utilisés dans la page.
  - **job/** : Page de détail pour afficher les informations d'une offre d'emploi spécifique ainsi que les composants utilisés dans la page.
  - **redux** : Exemple de mise en place de redux.
  - **layout.tsx** : Mise en page appliquée sur l’ensemble du projet.
  - **loading.tsx** : Composant de chargement appliqué sur l’ensemble du projet.
  - **not-found.tsx** : Page 404.

- **components/** : Composants utilisés sur plusieurs pages du projet.

- **public/** : Contient les fichiers statiques comme les images et les styles.

- **lib/** : Diverses fonctions utilisées dans le projet.

- **styles/** : Contient les fichiers de styles CSS.

- **redux/** : Configuration de Redux.

- **.env** : Variables d’environnement.

## Processus de réflexion

### Avant le développement
Avant de commencer le développement, j'ai défini les fonctionnalités clés de l'application :
- Afficher une liste d'offres d'emploi, la pagination, et la possibilité de rechercher un emploi.
- Permettre de cliquer sur une offre pour voir les détails.
- Utiliser les fonctionnalités de routage de Next.js pour la navigation entre les pages.

### Pendant le développement
Pendant le développement, j'ai suivi ces étapes :
- Création d’un dossier **routes** où se trouvent une route pour la page de la liste d’offres d’emploi et une autre route (dossier **job**) pour la consultation d’un job.
- Passage des données via l'URL : J'ai choisi de ne pas utiliser Redux pour la gestion d'état. Les données sont passées via l'URL (l’id de l’offre d’emploi), ce qui simplifie le partage des informations entre les pages.

### Après le développement
Après avoir terminé le développement, j'ai effectué les tests suivants :
- Tests de navigation : Vérifier que l'on peut naviguer correctement entre la liste des offres et le détail d'une offre, et s'assurer que les données soient affiché.

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
