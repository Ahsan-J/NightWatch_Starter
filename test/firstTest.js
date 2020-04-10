const env = require('./environment.json')

module.exports = {
    'Demo test': function (browser) {
        browser
            .url('https://www.ecosia.org/')
            .waitForElementVisible('body')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
            .pause(5000)
            .end();
    }
};