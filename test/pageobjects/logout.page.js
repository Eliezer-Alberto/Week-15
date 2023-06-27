class LogOutPage {
    get logOutBtn() {
        return $('#logout_sidebar_link')
    };
    async logOutBtnClick() {
        await this.logOutBtn.click();
    };
};
export default new LogOutPage();