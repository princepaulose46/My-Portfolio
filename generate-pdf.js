import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Path to your local HTML file
  const htmlPath = path.join(__dirname, 'public', 'resume.html');
  const fileUrl = `file://${htmlPath}`;

  console.log(`Opening ${fileUrl}...`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Force strict A4 media emulation
  await page.emulateMediaType('print');

  console.log('Generating PDF...');
  await page.pdf({
    path: path.join(__dirname, 'public', 'Prince_Paulose_Resume.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    }
  });

  await browser.close();
  console.log('PDF generated successfully at public/Prince_Paulose_Resume.pdf');
})();
