import { test, expect } from '@playwright/test';

test('La página de login de Odoo carga', async ({ page }) => {
  await page.goto('/web/login');            // usa baseURL
  await expect(page).toHaveTitle(/Odoo/i);  // verifica título
});
