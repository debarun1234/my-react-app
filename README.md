# Debarun Ghosh Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a8d3ffa-c343-40b9-a192-5dc97f14a281/deploy-status)](https://app.netlify.com/sites/debarunghosh/deploys)

Live Site: https://debarunghosh.netlify.app/

## Features
- Modern React portfolio with Vite and Tailwind CSS
- Projects section auto-updates from your GitHub repositories
- Responsive, animated, and parallax UI
- Sections: About, Skills, Experience, Education, Projects, Publications, Certifications, Awards, Contact
- Netlify deployment ready

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-react-app.git
   cd my-react-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Environment Variables
To enable the Projects section to fetch your GitHub repositories, create a `.env` file in the root directory:
```
REACT_APP_GITHUB_USERNAME=your_github_username
REACT_APP_GITHUB_TOKEN=your_github_token # (optional, for private repos or higher rate limits)
```
- For public deployment (e.g., Netlify), add these as environment variables in your Netlify dashboard.
- **Do not commit your GitHub token to a public repository.**

### Running Locally
```sh
npm run dev
# or
yarn dev
```

### Building for Production
```sh
npm run build
# or
yarn build
```

### Deploying to Netlify
- Connect your repository to Netlify.
- Set the environment variables in the Netlify dashboard.
- Deploy!

## Plugins Used
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (Babel for Fast Refresh)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (SWC for Fast Refresh)

## Security Note
- Never expose sensitive tokens in client-side code for public sites. For private repo access, use serverless functions or keep your site private.

---

Feel free to fork and customize for your own portfolio!
