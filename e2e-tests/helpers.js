function Helper() {
    this.timeOut = 1000;
    this.get = function (name) {
        //browser.get('http://js.edu.pl/app/#/' + name);
        browser.get('http://localhost:8000/app/#/' + name);
    };

    this.waitForAlert = function () {
        browser.wait(function () {
            return browser.switchTo().alert().then(
                function (alert) {
                    alert.accept();
                    return true;
                },
                function () {
                    return false;
                }
            );
        }, this.timeOut);
    }

    this.signIn = function () {
        var menuBtnLogin = element(by.buttonText("zaloguj"));
        var btnLogin = element(by.buttonText("Login"));
        var login = element(by.model('login'));
        var pass = element(by.model('pass'));
        menuBtnLogin.click();
        login.clear();
        pass.clear();
        login.sendKeys('a');
        pass.sendKeys('a');
        btnLogin.click();
        this.waitForAlert();
    }
}

module.exports = Helper;