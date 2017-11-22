/**
 * Created by Aleksandr Kuzmin on 22.11.2017.
 */
var screenForm = function() {
    var element1 = element(by.xpath('//ul[@class="help__list"]//li[2]')),
        url = 'https://www.simbirsoft.com/',
        randomNumber = '',
        fs = require('fs');

    this.getSite = function () {
        browser.get(url);
    };

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    this.clickForElement = function(){
        element1.click();
    };

    this.reporter = function() {
        randomNumber = guid();
        jasmine.getEnv().addReporter(new function() {
            this.specDone = function(result) {
                if (result.failedExpectations.length > 0) {
                    browser.takeScreenshot();
                }
            };
        });
        browser.takeScreenshot().then(function(png) {
            var stream = fs.createWriteStream(randomNumber + ".PNG");
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
        console.log('Скрин упавшего теста: ' + randomNumber);
    };

};
module.exports = screenForm;