# Standalone Todo App

A standalone React todo application that uses demo data instead of a backend API. This version is completely self-contained and can run without any server dependencies.

## Features

- **Demo Data**: Uses local mock data instead of backend API calls
- **Authentication**: Simulated login/register with demo credentials
- **Todo Management**: Create, read, update, and delete todos
- **Responsive Design**: Works on desktop and mobile devices
- **No Backend Required**: Runs entirely in the browser

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Authentication

The app uses simulated authentication. You can use any email/password combination:

- **Login**: Use any email and password
- **Register**: Create a new account with any email, password, and name

### Demo Data

The app comes pre-loaded with sample todos:
- Learn React
- Build Todo App
- Deploy to GitHub

All data is stored in memory and will reset when you refresh the page.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
standalone-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Layout/
│   │   │   └── Header.js
│   │   └── Todo/
│   │       ├── TodoItem.js
│   │       └── TodoList.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── services/
│   │   ├── api.js
│   │   └── demoData.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Differences from Original

This standalone version differs from the original Todo-App in the following ways:

1. **No Backend**: All API calls replaced with local demo data
2. **No Axios**: Removed axios dependency
3. **No Proxy**: Removed backend proxy configuration
4. **Demo Data Service**: Added `demoData.js` for mock data
5. **In-Memory Storage**: Data resets on page refresh

## Deployment

This app can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

To deploy:

```bash
npm run build
```

Then upload the contents of the `build/` directory to your hosting service.

## License

This project is based on the original Todo-App by peacedev94.
