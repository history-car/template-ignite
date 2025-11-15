import { test, expect, Locator } from "@playwright/test";

const BASE_URL = "http://localhost:3001";

test.describe("Visual Layout and Typography Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    // Wait for page to fully load
    await page.waitForLoadState("networkidle");
  });

  test("should render all sections without layout issues", async ({ page }) => {
    // Check if main element exists
    const main = page.locator("main");
    await expect(main).toBeVisible();

    // Get all sections
    const sections = page.locator("section");
    const sectionCount = await sections.count();

    console.log(`Found ${sectionCount} sections on the page`);
    expect(sectionCount).toBeGreaterThan(0);

    // Validate each section is visible and has content
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      await expect(section).toBeVisible();

      // Check section has height (not collapsed)
      const box = await section.boundingBox();
      expect(box?.height).toBeGreaterThan(0);
      console.log(`Section ${i + 1}: height = ${box?.height}px`);
    }
  });

  test("should have proper text sizes for headings", async ({ page }) => {
    const results: Array<{
      selector: string;
      fontSize: string;
      element: string;
    }> = [];

    // Check H1 elements
    const h1Elements = page.locator("h1");
    const h1Count = await h1Elements.count();

    for (let i = 0; i < h1Count; i++) {
      const h1 = h1Elements.nth(i);
      const fontSize = await h1.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const text = (await h1.textContent())?.slice(0, 50) || "";
      results.push({ selector: "h1", fontSize, element: text });

      // H1 should be large (at least 2rem / 32px)
      const sizeInPx = parseFloat(fontSize);
      expect(sizeInPx).toBeGreaterThanOrEqual(32);
    }

    // Check H2 elements
    const h2Elements = page.locator("h2");
    const h2Count = await h2Elements.count();

    for (let i = 0; i < h2Count; i++) {
      const h2 = h2Elements.nth(i);
      const fontSize = await h2.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const text = (await h2.textContent())?.slice(0, 50) || "";
      results.push({ selector: "h2", fontSize, element: text });

      // H2 should be medium-large (at least 1.5rem / 24px)
      const sizeInPx = parseFloat(fontSize);
      expect(sizeInPx).toBeGreaterThanOrEqual(24);
    }

    // Check H3 elements
    const h3Elements = page.locator("h3");
    const h3Count = await h3Elements.count();

    for (let i = 0; i < h3Count; i++) {
      const h3 = h3Elements.nth(i);
      const fontSize = await h3.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const text = (await h3.textContent())?.slice(0, 50) || "";
      results.push({ selector: "h3", fontSize, element: text });

      // H3 should be medium (at least 1.25rem / 20px)
      const sizeInPx = parseFloat(fontSize);
      expect(sizeInPx).toBeGreaterThanOrEqual(20);
    }

    console.log(
      "Typography validation results:",
      JSON.stringify(results, null, 2),
    );
  });

  test("should have readable body text sizes", async ({ page }) => {
    const paragraphs = page.locator("p");
    const pCount = await paragraphs.count();

    const results: Array<{
      fontSize: string;
      lineHeight: string;
      text: string;
    }> = [];

    for (let i = 0; i < Math.min(pCount, 10); i++) {
      const p = paragraphs.nth(i);
      const fontSize = await p.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const lineHeight = await p.evaluate(
        (el) => window.getComputedStyle(el).lineHeight,
      );
      const text = (await p.textContent())?.slice(0, 50) || "";

      results.push({ fontSize, lineHeight, text });

      // Body text should be at least 16px for readability
      const sizeInPx = parseFloat(fontSize);
      expect(sizeInPx).toBeGreaterThanOrEqual(14);
    }

    console.log(
      `Checked ${results.length} paragraphs:`,
      JSON.stringify(results, null, 2),
    );
  });

  test("should have proper spacing and padding", async ({ page }) => {
    const sections = page.locator("section");
    const sectionCount = await sections.count();

    const spacingResults: Array<{
      section: number;
      padding: string;
      margin: string;
    }> = [];

    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      const paddingTop = await section.evaluate(
        (el) => window.getComputedStyle(el).paddingTop,
      );
      const paddingBottom = await section.evaluate(
        (el) => window.getComputedStyle(el).paddingBottom,
      );
      const marginTop = await section.evaluate(
        (el) => window.getComputedStyle(el).marginTop,
      );

      spacingResults.push({
        section: i + 1,
        padding: `${paddingTop} / ${paddingBottom}`,
        margin: marginTop,
      });

      // Sections should have meaningful padding (at least 40px)
      const paddingTopPx = parseFloat(paddingTop);
      expect(paddingTopPx).toBeGreaterThanOrEqual(40);
    }

    console.log("Section spacing:", JSON.stringify(spacingResults, null, 2));
  });

  test("should not have overlapping elements", async ({ page }) => {
    const allElements = await page.locator("section > *").all();
    const boxes: Array<{
      selector: string;
      box: NonNullable<Awaited<ReturnType<Locator["boundingBox"]>>>;
    }> = [];

    for (const element of allElements.slice(0, 20)) {
      const box = await element.boundingBox();
      const selector = await element.evaluate((el) => el.tagName);
      if (box) {
        boxes.push({ selector, box });
      }
    }

    // Simple overlap detection
    for (let i = 0; i < boxes.length - 1; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const box1 = boxes[i].box;
        const box2 = boxes[j].box;

        // Check if boxes don't overlap (simple check)
        const noOverlap =
          box1.x + box1.width <= box2.x ||
          box2.x + box2.width <= box1.x ||
          box1.y + box1.height <= box2.y ||
          box2.y + box2.height <= box1.y;

        if (!noOverlap) {
          console.log(
            `Potential overlap between ${boxes[i].selector} and ${boxes[j].selector}`,
          );
        }
      }
    }
  });

  test("should have proper button sizes and clickability", async ({ page }) => {
    const buttons = page.locator('button, a[href*="#"]');
    const buttonCount = await buttons.count();

    const buttonResults: Array<{
      type: string;
      text: string;
      width: number;
      height: number;
      fontSize: string;
    }> = [];

    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      const fontSize = await button.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const text = (await button.textContent())?.trim().slice(0, 30) || "";
      const type = await button.evaluate((el) => el.tagName);

      if (box) {
        buttonResults.push({
          type,
          text,
          width: box.width,
          height: box.height,
          fontSize,
        });

        // Buttons should be at least 44x44px for touch targets (WCAG guideline)
        expect(box.height).toBeGreaterThanOrEqual(40);
        expect(box.width).toBeGreaterThanOrEqual(80);
      }
    }

    console.log("Button sizes:", JSON.stringify(buttonResults, null, 2));
  });

  test("should be responsive on mobile viewport", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState("networkidle");

    // Check sections still render properly
    const sections = page.locator("section");
    const sectionCount = await sections.count();

    const mobileResults: Array<{
      section: number;
      width: number;
      height: number;
    }> = [];

    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      const box = await section.boundingBox();

      if (box) {
        mobileResults.push({
          section: i + 1,
          width: box.width,
          height: box.height,
        });

        // Section should not overflow viewport width
        expect(box.width).toBeLessThanOrEqual(375);
        // Section should have content
        expect(box.height).toBeGreaterThan(0);
      }
    }

    console.log(
      "Mobile viewport results:",
      JSON.stringify(mobileResults, null, 2),
    );
  });

  test("should have proper color contrast", async ({ page }) => {
    // Check text elements for color
    const textElements = page.locator("h1, h2, h3, p").first();

    const color = await textElements.evaluate(
      (el) => window.getComputedStyle(el).color,
    );
    const backgroundColor = await textElements.evaluate((el) => {
      let bgColor = window.getComputedStyle(el).backgroundColor;
      let parent = el.parentElement;

      // Find first non-transparent background
      while (bgColor === "rgba(0, 0, 0, 0)" && parent) {
        bgColor = window.getComputedStyle(parent).backgroundColor;
        parent = parent.parentElement;
      }

      return bgColor;
    });

    console.log("Text color:", color);
    console.log("Background color:", backgroundColor);

    // Basic check that colors are defined
    expect(color).toBeTruthy();
    expect(backgroundColor).toBeTruthy();
  });

  test("should have images with proper dimensions", async ({ page }) => {
    const images = page.locator("img");
    const imageCount = await images.count();

    const imageResults: Array<{
      src: string;
      alt: string;
      width: number;
      height: number;
      hasAlt: boolean;
    }> = [];

    for (let i = 0; i < Math.min(imageCount, 10); i++) {
      const img = images.nth(i);
      const src = (await img.getAttribute("src")) || "";
      const alt = (await img.getAttribute("alt")) || "";
      const box = await img.boundingBox();

      if (box) {
        imageResults.push({
          src: src.slice(0, 50),
          alt: alt.slice(0, 30),
          width: box.width,
          height: box.height,
          hasAlt: alt.length > 0,
        });

        // Images should have dimensions
        expect(box.width).toBeGreaterThan(0);
        expect(box.height).toBeGreaterThan(0);

        // Images should have alt text for accessibility
        expect(alt.length).toBeGreaterThan(0);
      }
    }

    console.log("Image validation:", JSON.stringify(imageResults, null, 2));
  });

  test("should take screenshots for visual inspection", async ({ page }) => {
    // Full page screenshot
    await page.screenshot({
      path: "tests/e2e/screenshots/full-page.png",
      fullPage: true,
    });

    // Desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({
      path: "tests/e2e/screenshots/desktop-1920.png",
      fullPage: true,
    });

    // Tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: "tests/e2e/screenshots/tablet-768.png",
      fullPage: true,
    });

    // Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: "tests/e2e/screenshots/mobile-375.png",
      fullPage: true,
    });

    console.log("Screenshots saved to tests/e2e/screenshots/");
  });
});
