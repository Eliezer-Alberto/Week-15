import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Shopping Process', () => {
    beforeAll(async () => {
        await browser.url('https://www.saucedemo.com/');
    });
    describe('Successful Login', () => {
        it('Verify Correct Login Process', async () => {
            await expect(LoginPage.userNameInput).toBeDisplayed();
            await LoginPage.loginValues('standard_user', 'secret_sauce');
        });
    });
    describe('Access Aside Bar', () => {
        it('Verify Correct access to Aside Bar', async () => {
            await InventoryPage.asideBtnClick();
            await browser.pause(1000);
            await InventoryPage.crossBtnClick();
        });
    });
    describe('First Purchased Product', () => {
        it('First Product Added to Cart', async () => {
            await InventoryPage.firstItem.click();
            await InventoryPage.addToCartClick();
            await InventoryPage.back2Products();
        });
    });
    describe('Second Purchased Product', () => {
        it('Second Product Added to Cart', async () => {
            await InventoryPage.secondItem.click();
            await InventoryPage.add2Cart.click();
            await InventoryPage.back2Products();
            await InventoryPage.shoppingCartClick();
        });
        it('fillForm', async () => {
            await InventoryPage.checkout.click();
            await InventoryPage.firstName.setValue('Eliezer');
            await InventoryPage.lastName.setValue('Alberth');
            await InventoryPage.postalCode.setValue('2152');
            await InventoryPage.continueBtnClick();
        });
    });
    describe('Finish Shopping Process', () => {
        it('Verify Successful Finish Proccess', async () => {
            await InventoryPage.finishBtnClick();
            await InventoryPage.backHomeBtnClick();
        });
    });
});