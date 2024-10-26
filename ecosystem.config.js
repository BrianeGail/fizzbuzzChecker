module.exports = {
    apps: [
      {
        name: 'fizzbuzz-app',       // Name of the application
        script: './server.js',      // Path to the entry script
        instances: 'max',           // Number of instances to run (max available)
        exec_mode: 'cluster',       // Run in cluster mode
        watch: true,                // Restart app on file changes
        env: {
          NODE_ENV: 'development',  // Environment variables for development
          PORT: 8080                // Port number
        },
        env_production: {
          NODE_ENV: 'production',   // Environment variables for production
          PORT: 8080                // Port number
        },
      },
    ],
  };
  