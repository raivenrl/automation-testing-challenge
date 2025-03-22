const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
let page;
let browser;

Given('I am on the Swag Labs login page', async function () {
  browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I enter {string} and {string}', async function (username, password) {
  await page.fill('#user-name', username); 
  await page.fill('#password', password);  
});

When('I click the login button', async function () {
  await page.click('#login-button');

});

Then('I should be on the inventory page', async function () {
  const url = page.url();
  if (url === 'https://www.saucedemo.com/inventory.html') {
    console.log('Successfully logged in');
  } else {
    throw new Error('Failed to log in, user is not on the inventory page');
  }

//   await browser.close();

});

