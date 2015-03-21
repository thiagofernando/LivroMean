/**
 * Created by ThiagoFernando on 20/03/2015.
 */
exports.config = {
specs: ['../test/e2e/**/*.js'],
    capabilities: {
        'browserName': 'firefox'
    },
    onPrepare: function() {

        browser.driver.get('http://localhost:3000');

        browser.driver.findElement(by.id('entrar')).click();
        browser.driver.findElement(by.id('login_field'))
            .sendKeys('EDITADO');
        browser.driver.findElement(by.id('password'))
            .sendKeys('EDITADO');
        browser.driver.findElement(by.name('commit')).click();
    }
};

