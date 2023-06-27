import LoginPage from '../pageobjects/login.page.js';

describe('Login Process', () => {
    beforeAll(async () => {
        await browser.url('https://www.saucedemo.com/')
    });
    it('Verify Correct Login Process', async () => {
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginValues('standard_user', 'secret_sauce');
    });
});