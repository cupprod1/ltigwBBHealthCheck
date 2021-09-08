var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");

module.exports = {
    elements: {
        consentDialogOkButton: {
            selector: '//div[@class="consent-footer"]//button',
            locateStrategy: 'xpath'
        },
        username: {
            selector: '//ul[contains(@id, "loginFormList")]//input[@name="user_id"]',
            locateStrategy: 'xpath'
        },

        password: {
            selector: '//ul[contains(@id, "loginFormList")]//input[@name="password"]',
            locateStrategy: 'xpath'
        },

        loginButton: {
            selector: '//ul[contains(@id, "loginFormList")]//input[@name="login"]',
            locateStrategy: 'xpath'
        },

    },

    commands: [
        {
            waitForConsentDialogToAppear: function () {
                this.api.perform(function () {
                    testlog.info("Waiting for Consent Dialog to appear on BB login page")
                })
                this.api.useXpath();
                this.api.waitForElementVisible(this.elements.consentDialogOkButton.selector, 60000, "Consent Dialog is not appeared on BB login page");
                this.api.useCss();
                this.api.perform(function () {
                    testlog.info("Consent Dialog is appeared successfully on BB login page")
                })



            },
            clickConsentDialogOkButton: function () {
                this.api.perform(function () {
                    testlog.info("Clicking Consent Dialog Ok button ")
                })
                this.api.useXpath();
                this.api.click(this.elements.consentDialogOkButton.selector, function (result) {
                    this.assert.equal(result.status, 0, "OK Button is not clickable");
                })
                this.api.useCss();
                this.api.perform(function () {
                    testlog.info("Consent Dialog Ok button is clicked successfully")
                })

            },

            login: function (email, password) {
                this.api.perform(function () {
                    testlog.info("Entering login details")
                })
                this.api.useXpath();
                this.api.setValue(this.elements.username.selector, email);
                this.api.setValue(this.elements.password.selector, password);
                this.api.click(this.elements.loginButton.selector, function (result) {
                    this.assert.equal(result.status, 0, "Login Button is not clickable");
                })
                this.api.useCss();
                this.api.perform(function () {
                    testlog.info("Login Button is clicked successfully")
                })
            }
        }
    ]
}