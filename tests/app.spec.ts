// tests/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads and shows heading', async ({ page }) => {
  await page.goto('https://my-zap-demo.vercel.app/');

  // ✅ Example checks:
  await expect(page).toHaveTitle(/Zap Demo/i);

  // Check that a specific element exists
  await expect(page.locator('h1')).toBeVisible(); // Adjust selector as needed

  // Check button or message if present
  const button = page.locator('button'); // or '#click-me', etc.
  if (await button.isVisible()) {
    await button.click();
    await expect(page.locator('#message')).toHaveText(/clicked/i);
  }
});
