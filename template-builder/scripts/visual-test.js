import { chromium } from "@playwright/test";

async function runVisualTests() {
  console.log("🚀 Starting visual validation tests...\n");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = {
    passed: [],
    failed: [],
    warnings: [],
  };

  try {
    // Navigate to page
    console.log("📱 Navigating to http://localhost:3002...");
    await page.goto("http://localhost:3002", {
      waitUntil: "networkidle",
      timeout: 15000,
    });
    console.log("✅ Page loaded successfully\n");

    // Test 1: Check sections render
    console.log("🔍 Test 1: Checking section rendering...");
    const sections = page.locator("section");
    const sectionCount = await sections.count();
    console.log(`   Found ${sectionCount} sections`);
    if (sectionCount > 0) {
      results.passed.push(`✅ Found ${sectionCount} sections`);
    } else {
      results.failed.push("❌ No sections found");
    }

    // Test 2: Check heading sizes
    console.log("\n🔍 Test 2: Checking heading font sizes...");
    const h1 = page.locator("h1").first();
    if ((await h1.count()) > 0) {
      const h1Size = await h1.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const h1Text = (await h1.textContent()).slice(0, 40);
      console.log(`   H1: "${h1Text}" - ${h1Size}`);
      const h1Px = parseFloat(h1Size);
      if (h1Px >= 32) {
        results.passed.push(`✅ H1 font size adequate (${h1Size})`);
      } else {
        results.warnings.push(
          `⚠️  H1 font size small (${h1Size}, expected >= 32px)`,
        );
      }
    }

    const h2 = page.locator("h2").first();
    if ((await h2.count()) > 0) {
      const h2Size = await h2.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const h2Text = (await h2.textContent()).slice(0, 40);
      console.log(`   H2: "${h2Text}" - ${h2Size}`);
      const h2Px = parseFloat(h2Size);
      if (h2Px >= 24) {
        results.passed.push(`✅ H2 font size adequate (${h2Size})`);
      } else {
        results.warnings.push(
          `⚠️  H2 font size small (${h2Size}, expected >= 24px)`,
        );
      }
    }

    // Test 3: Check paragraph text
    console.log("\n🔍 Test 3: Checking body text readability...");
    const paragraphs = page.locator("p");
    const pCount = await paragraphs.count();
    if (pCount > 0) {
      const firstP = paragraphs.first();
      const pSize = await firstP.evaluate(
        (el) => window.getComputedStyle(el).fontSize,
      );
      const lineHeight = await firstP.evaluate(
        (el) => window.getComputedStyle(el).lineHeight,
      );
      console.log(`   Paragraph: ${pSize}, line-height: ${lineHeight}`);
      const pPx = parseFloat(pSize);
      if (pPx >= 14) {
        results.passed.push(`✅ Paragraph font size readable (${pSize})`);
      } else {
        results.warnings.push(`⚠️  Paragraph font size too small (${pSize})`);
      }
    }

    // Test 4: Check button sizes
    console.log("\n🔍 Test 4: Checking button sizes...");
    const buttons = page.locator('button, a[href*="#"]');
    const buttonCount = await buttons.count();
    console.log(`   Found ${buttonCount} interactive elements`);
    if (buttonCount > 0) {
      const firstButton = buttons.first();
      const box = await firstButton.boundingBox();
      if (box) {
        console.log(
          `   First button: ${Math.round(box.width)}x${Math.round(box.height)}px`,
        );
        if (box.height >= 40 && box.width >= 80) {
          results.passed.push(
            `✅ Button size adequate (${Math.round(box.width)}x${Math.round(box.height)}px)`,
          );
        } else {
          results.warnings.push(
            `⚠️  Button size small (${Math.round(box.width)}x${Math.round(box.height)}px, expected >= 80x40px)`,
          );
        }
      }
    }

    // Test 5: Check section spacing
    console.log("\n🔍 Test 5: Checking section spacing...");
    for (let i = 0; i < Math.min(sectionCount, 3); i++) {
      const section = sections.nth(i);
      const paddingTop = await section.evaluate(
        (el) => window.getComputedStyle(el).paddingTop,
      );
      const paddingBottom = await section.evaluate(
        (el) => window.getComputedStyle(el).paddingBottom,
      );
      console.log(
        `   Section ${i + 1}: padding ${paddingTop} / ${paddingBottom}`,
      );
      const paddingPx = parseFloat(paddingTop);
      if (paddingPx >= 40) {
        results.passed.push(`✅ Section ${i + 1} has adequate spacing`);
      } else {
        results.warnings.push(
          `⚠️  Section ${i + 1} has tight spacing (${paddingTop})`,
        );
      }
    }

    // Test 6: Mobile responsive check
    console.log("\n🔍 Test 6: Checking mobile responsiveness...");
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);

    for (let i = 0; i < Math.min(sectionCount, 3); i++) {
      const section = sections.nth(i);
      const box = await section.boundingBox();
      if (box) {
        console.log(
          `   Section ${i + 1} on mobile: ${Math.round(box.width)}px wide`,
        );
        if (box.width <= 375) {
          results.passed.push(`✅ Section ${i + 1} fits mobile viewport`);
        } else {
          results.failed.push(
            `❌ Section ${i + 1} overflows mobile (${Math.round(box.width)}px > 375px)`,
          );
        }
      }
    }

    // Take screenshots
    console.log("\n📸 Taking screenshots...");
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({
      path: "tests/e2e/screenshots/mobile-375.png",
      fullPage: true,
    });
    console.log("   ✅ Mobile screenshot saved");

    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({
      path: "tests/e2e/screenshots/tablet-768.png",
      fullPage: true,
    });
    console.log("   ✅ Tablet screenshot saved");

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({
      path: "tests/e2e/screenshots/desktop-1920.png",
      fullPage: true,
    });
    console.log("   ✅ Desktop screenshot saved");
  } catch (error) {
    results.failed.push(`❌ Error: ${error.message}`);
    console.error("\n❌ Test error:", error.message);
  } finally {
    await browser.close();
  }

  // Print summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 TEST SUMMARY");
  console.log("=".repeat(60));
  console.log(`\n✅ Passed: ${results.passed.length}`);
  results.passed.forEach((item) => console.log(`   ${item}`));

  if (results.warnings.length > 0) {
    console.log(`\n⚠️  Warnings: ${results.warnings.length}`);
    results.warnings.forEach((item) => console.log(`   ${item}`));
  }

  if (results.failed.length > 0) {
    console.log(`\n❌ Failed: ${results.failed.length}`);
    results.failed.forEach((item) => console.log(`   ${item}`));
  }

  console.log("\n" + "=".repeat(60));
  console.log(`📁 Screenshots saved to: tests/e2e/screenshots/`);
  console.log("=".repeat(60) + "\n");

  return results;
}

runVisualTests().catch(console.error);
