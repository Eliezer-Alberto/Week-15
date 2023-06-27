import LoginPage from '../pageobjects/login.page.js';

describe('Login Process', () => {
    beforeAll(async () => {
        await browser.url('https://www.saucedemo.com/')
    });
    it('Verify problem_user Login', async () => {
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginValues('problem_user', 'secret_sauce');
    });
});