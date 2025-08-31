import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html'],                    // reporte visual
    ['junit', { outputFile: 'junit.xml' }]  // reporte para CI/n8n
  ],
  use: {
    headless: true,              // ejecuta sin abrir ventana
    baseURL: 'http://localhost:8069', // Odoo en tu VM
  },
  timeout: 60_000,               // 60s por test
});
