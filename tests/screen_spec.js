describe ("Test createRole", function(){
    var common = require('../config/common.js'),
        screenForm = new common.screenForm(),
        mainPage = 'https://www.simbirsoft.com/help/quality_of_your_it_systems.php1';
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        screenForm.getSite();
        screenForm.reporter();
    });

    // 1.Создание скрина;
    it("screenFirstTest", function () {
        screenForm.clickForElement();
        since('Ожидался переход на другой адрес').
            expect(browser.getCurrentUrl()).toEqual(mainPage);
    });

});