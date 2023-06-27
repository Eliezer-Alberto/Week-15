import LoginPage from '../pageobjects/login.page.js';

describe('Login Process', () => {
    beforeAll(async () => {
        await browser.url('https://www.saucedemo.com/')
    });
    it('Verify Locked-Out-User Login', async () => {
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginValues('locked_out_user', 'secret_sauce');
        await expect (LoginPage.errorBtnLocked).toBeDisplayed();
    });
});