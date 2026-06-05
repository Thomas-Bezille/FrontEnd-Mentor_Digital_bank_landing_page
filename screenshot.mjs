import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = "file://" + join(__dirname, "index.html");
const outDir = join(__dirname, "screenshots");

const widths = [375, 768, 1024, 1086, 1440, 1920];

const browser = await chromium.launch();
for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({
    path: join(outDir, `shot-${width}.png`),
    fullPage: true,
  });
  await page.close();
  console.log(`captured ${width}px`);
}
await browser.close();
console.log("done");
