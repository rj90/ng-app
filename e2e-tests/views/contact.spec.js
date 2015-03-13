var Helpers = require('./../helpers');

describe('contact page', function () {

    var helpers = new Helpers();

    it('should validate all fields', function () {
        helpers.get('contact');
        //var loginBtn = element(by.buttonText("Login"));
        //if (loginBtn.isPresent()) {
        //    loginBtn.click();
        //    helpers.waitForAlert();
        //}
        expect(browser.getTitle()).toContain('contact');
        expect(browser.getLocationAbsUrl()).toMatch("/contact");

        var btnSend = element(by.css('.btn-send'));
        var errors = element.all(by.css('.text-danger'));
        var nameField = element(by.css('input[type=text]'));
        var emailField = element(by.css('input[type=email]'));
        var messageField = element(by.css('textarea'));
        var msgSent = element(by.css('.alert-success'));

        expect(errors.count()).toBe(0);
        expect(msgSent.isPresent()).toBeFalsy();

        btnSend.click();

        expect(errors.count()).toBe(3);
        expect(errors.first().isDisplayed()).toBe(true);
        expect(errors.get(1).isDisplayed()).toBe(true);
        expect(errors.get(2).isDisplayed()).toBe(true);

        nameField.sendKeys('Robert');
        emailField.sendKeys('robert@robert.pl');
        messageField.sendKeys('lorem ipsum is...');
        //name.clear();

        expect(nameField.getAttribute('value')).toBe('Robert');
        expect(emailField.getAttribute('value')).toBe('robert@robert.pl');
        expect(messageField.getAttribute('value')).toBe('lorem ipsum is...');

        btnSend.click();

        expect(nameField.getAttribute('value')).toBe('');
        expect(emailField.getAttribute('value')).toBe('');
        expect(messageField.getAttribute('value')).toBe('');

        expect(msgSent.isDisplayed()).toBeTruthy();

        //browser.sleep(5000);
    })
})