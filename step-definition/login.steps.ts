import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, expect, Page } from "playwright/test";

let page: Page;

Before(async ()=> {
    console.log("Before Parameter");
})

After(async ()=> {
    console.log("After Parameter");
})


Given('user open sauce demo application', async function () {
    const browser: Browser = await chromium.launch({
        headless: false,
    });
    const context: BrowserContext = await browser.newContext();
    page = await context.newPage();
    await page.goto(this.parameters.url);
});

When('click on login button without entering username and password', async function () {
    await page.locator('#login-button').click();
});

Then('verify error message populate on login page', async function () {
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is requir');
});

Then('verify error message populate', async function () {
 await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is requir');
});

When('Enter username in username textbox', async function () {
    console.log('step1');
    await page.getByPlaceholder('Username').fill('standard_user');
});

When('Enter password in password textbox', async function () {
        console.log('step2');
    await page.getByPlaceholder('Password').fill('secret_sauce');
});

Then('Then click on the login button', async function () {
        console.log('step3');
     await page.locator('#login-button').click();
});


When('Enter username in username textbox {string}', async function (userName : string) {
    await page.getByPlaceholder('Username').fill(userName);
});

When('Enter password in password textbox {string}', async function (password : string) {
    await page.getByPlaceholder('Password').fill(password);
});
