import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

import 'chromedriver';

const options = new chrome.Options();
const chromeOptions = process.env.GITHUB_ACTIONS ? options.headless() : options;

export async function build() {
  const browser = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

  // browser.get('https://e2e-boilerplate.github.io/sandbox/');

  return browser;
}
