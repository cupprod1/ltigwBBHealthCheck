module.exports = {
    elements: {
        practiceExtra: {
            selector: '//ul[contains(@id, "content_listContainer")]//span[contains(text(),"Practice Extra")]'
        }
    },
    commands: [
        {
            clickPracticeExtra: function () {
                this.api.perform(function () {
                    testlog.info("Clicking on Practice Extra on Content Page")
                })
                this.api.useXpath();
                this.api.click(this.elements.practiceExtra.selector, function (result) {
                    this.assert.equal(result.status, 0, "Practice Extra is not clickable");
                })
                this.api.useCss();
                this.api.perform(function () {
                    testlog.info("Practice Extra is clicked successfully");

                })
            }
        }
    ]
}