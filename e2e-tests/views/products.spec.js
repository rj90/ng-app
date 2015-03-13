//var Helpers = require('./../helpers');
//
//describe('products page', function () {
//    var helpers = new Helpers();
//    var path = require('path');
//
//    function getProductsCount() {
//        return element.all(by.repeater('item in apiInterfaceSrv.items'))
//            .then(function (products) {
//                return products.length;
//            })
//    }
//
//    it('should show proper products amount', function () {
//        helpers.get('products');
//        expect(browser.getTitle()).toContain('products');
//        var itemsPerPage = element(by.model('paginationSettings.itemsPerPage'));
//        itemsPerPage.$('option:checked').getText().then(function (val) {
//            expect(getProductsCount()).toBeLessThan(+val + 1);
//        });
//        itemsPerPage.element(by.cssContainingText('option', '5')).click();
//        itemsPerPage.$('option:checked').getText().then(function (val) {
//            expect(getProductsCount()).toBeLessThan(+val + 1);
//        });
//    })
//
//    it('should add product and then remove it', function () {
//        // sign in
//        helpers.signIn();
//        helpers.get('products');
//        // adding a product
//        var btnAddProduct = element(by.buttonText("dodaj produkt"));
//        btnAddProduct.click();
//
//        var productModal = element(by.css('.modal-dialog'));
//        var modalTitle = productModal.element(by.css('input[type=text]'));
//        var modalDesc = productModal.element(by.css('textarea'));
//        var modalPrice = productModal.element(by.css('input[type=number]'));
//        var modalFile = productModal.element(by.css('input["type=file"]'));
//        var modalBtnOk = productModal.element(by.buttonText("OK"));
//
//        var productTitle = 'title' + +new Date();
//        modalTitle.sendKeys(productTitle);
//        modalDesc.sendKeys('desc');
//        modalPrice.sendKeys(123);
//        var fileToUpload = 'laptop.jpg';
//        var absolutePath = path.resolve(__dirname + '/assets/', fileToUpload);
//        modalFile.sendKeys(absolutePath);
//        browser.sleep(5555)
//        modalBtnOk.click();
//
//        // product searching
//        var search = element(by.model('searchControl.search'));
//        search.sendKeys(productTitle);
//        expect(getProductsCount()).toBe(1);
//
//        // product removal
//        var btnDelete = element(by.buttonText("usuĹ"));
//        var modalDeleteBtnOk = productModal.element(by.buttonText("OK"));
//        btnDelete.click();
//        modalDeleteBtnOk.click();
//        helpers.waitForAlert();
//        expect(getProductsCount()).toBe(0);
//    })
//
//
//
//})