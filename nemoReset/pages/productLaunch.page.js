module.exports = {
    elements: {
        content: {
            selector: '//div[contains(@class, "content-container")]'
        }
    },
    commands: [
        {
            isPageLaunched: function () {
                var browser = this.api
                var handle;
                browser.windowHandles(function (result) {
                    handle = result.value[1];
                    browser.perform(function () {
                        testlog.info("Switching Window")
                    })
                    browser.switchWindow(handle, function() {
                        browser.perform(function () {
                            testlog.info("Window is switched")
                        })
                    });
                })
                browser.perform(function () {
                    testlog.info("Waiting for Practice Extra to launch")
                })
                browser.pause(20000)
                browser.useXpath();
                browser.waitForElementVisible(this.elements.content.selector, 120000, "Practice Extra is  not launched");
                browser.useCss();
                browser.perform(function () {
                    testlog.info("Practice extra is launched successfully")
                })
                // browser.pause(120000)


            }
        }
    ]
}