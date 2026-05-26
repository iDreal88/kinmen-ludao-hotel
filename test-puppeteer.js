import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://localhost:5173/');
  // Wait for React to load
  await new Promise(r => setTimeout(r, 2000));
  // Click the open virtual tour button
  const btn = await page.$('.btn-book');
  if (btn) {
      await btn.click();
      await new Promise(r => setTimeout(r, 2000));
  } else {
      console.log('Button not found');
  }
  await browser.close();
})();
