import puppeteer from 'puppeteer';

const url = process.env.URL || 'http://localhost:3000/';
const out = process.env.OUT || 'public/screenshot-hero.png';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Scroll sedikit agar bagian hero terlihat penuh
  await page.evaluate(() => window.scrollTo(0, 0));

  // Ambil screenshot full width di atas
  await page.screenshot({ path: out, fullPage: false });
  await browser.close();
  console.log(`Saved screenshot to ${out}`);
})();