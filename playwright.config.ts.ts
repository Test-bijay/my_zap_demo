// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://my-zap-demo.vercel.app',
    headless: true,
    viewport: { width: 1280, height: 720 }
  },
});
