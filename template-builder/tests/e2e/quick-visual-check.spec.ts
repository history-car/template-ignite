import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3002";

test.describe("Quick Visual Validation", () => {
  test("should render page and check basic layout", async ({ page }) => {
    await page.goto(BASE_URL, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    // Take initial screenshot
    await page.screenshot({ path: "tests/e2e/screenshots/initial-load.png" });

    // Check main element
    const main = page.locator("main");
    await expect(main).toBeVisible();

    // Get all sections
    const sections = page.locator("section");
    const count = await sections.count();
    console.log(`✓ Found ${count} sections`);

    // Check first section (Hero)
    const firstSection = sections.first();
    await expect(firstSection).toBeVisible();

    // Check heading sizes
    const h1 = page.locator("h1").first();
    if ((await h1.count()) > 0) {
      const h1Size = await h1.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      console.log(`✓ H1 font size: ${h1Size}`);
      expect(parseFloat(h1Size)).toBeGreaterThanOrEqual(32);
    }

    const h2 = page.locator("h2").first();
    if ((await h2.count()) > 0) {
      const h2Size = await h2.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      console.log(`✓ H2 font size: ${h2Size}`);
      expect(parseFloat(h2Size)).toBeGreaterThanOrEqual(24);
    }

    // Check buttons
    const buttons = page.locator('button, a[class*="button"]');
    const buttonCount = await buttons.count();
    console.log(`✓ Found ${buttonCount} buttons`);

    if (buttonCount > 0) {
      const firstButton = buttons.first();
      const box = await firstButton.boundingBox();
      if (box) {
        console.log(`✓ First button size: ${box.width}x${box.height}px`);
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    }

    // Mobile viewport check
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: "tests/e2e/screenshots/mobile-check.png" });
    console.log("✓ Mobile viewport screenshot taken");

    // Desktop viewport check
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ path: "tests/e2e/screenshots/desktop-check.png" });
    console.log("✓ Desktop viewport screenshot taken");
  });

  test("should check text readability", async ({ page }) => {
    await page.goto(BASE_URL, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    // Check paragraph text
    const paragraphs = page.locator("p").first();
    if ((await paragraphs.count()) > 0) {
      const fontSize = await paragraphs.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const lineHeight = await paragraphs.evaluate(
        (el) => window.getComputedStyle(el).lineHeight,
      );
      console.log(
        `✓ Paragraph font size: ${fontSize}, line height: ${lineHeight}`,
      );
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(14);
    }
  });

  test("should verify responsive layout", async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: "Mobile" },
      { width: 768, height: 1024, name: "Tablet" },
      { width: 1920, height: 1080, name: "Desktop" },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto(BASE_URL, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });

      const sections = page.locator("section");
      const count = await sections.count();

      for (let i = 0; i < count; i++) {
        const section = sections.nth(i);
        const box = await section.boundingBox();
        if (box) {
          // Check no horizontal overflow
          expect(box.width).toBeLessThanOrEqual(viewport.width + 1);
          console.log(
            `✓ ${viewport.name} - Section ${i + 1}: ${box.width}x${box.height}px`,
          );
        }
      }

      await page.screenshot({
        path: `tests/e2e/screenshots/${viewport.name.toLowerCase()}-${viewport.width}.png`,
        fullPage: true,
      });
    }
  });
});
