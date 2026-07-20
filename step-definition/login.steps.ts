import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, expect, Page } from "playwright/test";

let page: Page;

Given('user open sauce demo application', async function () {
    const browser: Browser = await chromium.launch({
        headless: false,
    });
    const context: BrowserContext = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});

When('click on login button without entering username and password', async function () {
    await page.locator('#login-button').click();
});

Then('verify error message populate on login page', async function () {
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});