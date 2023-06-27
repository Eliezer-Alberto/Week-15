class LoginPage {
    get loginLogo() {
        return $('.login_logo')
    };
    get userNameInput() {
        return $('#user-name')
    };
    get passwordInput() {
        return $('#password')
    };
    get loginBtn() {
        return $('#login-button')
    };
    get loginCredentials() {
        return $("#root > div > div.login_wrapper > div.login_credentials_wrap > div")
    };
    get errorUserNameInput() {
        return $('#login_button_container > div > form > div:nth-child(1) > svg')
    };
    get errorPasswordInput() {
        return $('#login_button_container > div > form > div:nth-child(2) > svg')
    };
    get errorMsg() {
        return $('.error-message-container.error')
    };
    get errorTxt() {
        return $('.error-message-container.error h3')
    };
    get errorBtn() {
        return $('.error-button')
    };
    get errorBtnLocked() {
        return $('#login_button_container > div > form > div.error-message-container.error > h3')
    };
    async loginValues (username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    };
    open() {
        return browser.url('http://www.saucedemo.com/')
    };
};
export default new LoginPage();