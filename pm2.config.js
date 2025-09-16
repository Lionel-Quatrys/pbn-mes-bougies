module.exports = {
  apps: [
    {
      name: "next-wordpress",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1, // Forcer une seule instance
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
