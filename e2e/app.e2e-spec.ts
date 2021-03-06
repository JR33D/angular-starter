import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

    let expectedMsg = 'Hello Angular';

    beforeEach(function () {
        browser.get('');
    });

    it('should display: ' + expectedMsg, function (done: DoneFn) {
        element(by.css('h1')).getText()
            .then((text: string) => {
                expect(text).toEqual(expectedMsg);
            })
            .then(done);
    });

});
