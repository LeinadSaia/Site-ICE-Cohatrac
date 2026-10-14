module.exports = {
  apps: [
    {
      name: "ice-cohatrac",
      script: "npm",
      args: "run start",
      cwd: "./",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
