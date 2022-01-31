module.exports = {
    elements: {
        contentTab: {
            selector: '//ul[contains(@id, "courseMenu")]//li[2]'
        },

        menuPuller: {
            selector: '//*[@id="puller"]'
        }
    },
    commands: [
        {
            clickContentTab: function () {
                this.api.perform(function () {
                    testlog.info("Clicking for Content Tab on home page")
                })
                this.api.useXpath();
                this.api.pause(5000)
                this.api.click(this.elements.menuPuller.selector, function (result) {
                    this.assert.equal(result.status, 0, "Left Menu is not getting opened");
                })
                this.api.pause(2000)
                this.api.click(this.elements.contentTab.selector, function (result) {
                    this.assert.equal(result.status, 0, "Content Tab is not clickable");
                })
                this.api.useCss();
                this.api.perform(function () {
                    testlog.info("Content tab is clicked successfully")
                })
            }
        }
    ]
}