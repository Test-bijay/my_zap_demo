import { test, expect } from '@playwright/test';

test('homepage loads and shows heading', async ({ page }) => {
  await page.goto('/'); // Uses baseURL

  // Check that page title is correct
  await expect(page).toHaveTitle(/ZAP Test App/i);

  // Check the H1 is visible
  await expect(page.locator('h1')).toBeVisible();

  // Optionally test button interaction
  const button = page.locator('button');
  if (await button.isVisible()) {
    await button.click();
    await expect(page.locator('#message')).toHaveText(/clicked/i);
  }
});
