module.exports = {
    elements: {
        content: {
            selector: '//div[contains(@id, "content_wrap_0")]//div[contains(@class,"contentblock")]'
        }
    },
    commands: [
        {
            isPageLaunched: function () {
                var handle;
                this.api.window_handles(function (result) {
                    handle = result.value[1];
                })
                this.api.perform(function () {
                    testlog.info("switching window")
                })
                this.api.switchWindow(handle);
                this.api.perform(function () {
                    testlog.info("window is switched")
                })
                this.api.perform(function () {
                    testlog.info("Waiting for Practice Extra to launch")
                })
                this.api.useXpath();
                this.api.waitForElementVisible(this.elements.content.selector, 20000, "Practice Extra is  not launched");

                this.api.useCss();
                this.api.perform(function () {
                    testlog.info("Practice extra is launched successfully")
                })


            }
        }
    ]
}