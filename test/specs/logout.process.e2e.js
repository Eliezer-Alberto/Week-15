import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import logOutPage from '../pageobjects/logout.page.js';

describe('Properly Login Process', () => {
    beforeAll(async () => {
        await browser.url('https://www.saucedemo.com/')
    });
    it('Verify Correct Login Process', async () => {
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginValues('standard_user', 'secret_sauce');
    });
    describe('Logout Process', () => {
        it('Verify Correct Logout Process', async () => {
            await InventoryPage.asideBtnClick();
            await browser.pause(1000);
            await logOutPage.logOutBtnClick();
        });
    });
});