var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");

module.exports = {
    elements: {
        courseHyperlink: {
            selector: '//div[contains(@id, "My_Courses_Tools")]//*[contains(@class, "courseListing")]//a'
        }
    },

    commands: [
        {// course Name is fixed or not?
            clickCourse: function () {
                this.api.perform(function () {
                    testlog.info("Waiting for Course to appear on Dashboard Page")
                })
                this.api.useXpath();
                this.api.waitForElementVisible(this.elements.courseHyperlink.selector, 60000, "Course is not visible on Dashboard Page");
                this.api.perform(function () {
                    testlog.info("Course is visible on Dashboard Page")
                })
                this.api.perform(function () {
                    testlog.info("Clicking Course Hyperlink on Dashboard Page")
                })
                this.api.click(this.elements.courseHyperlink.selector, function (result) {
                    this.assert.equal(result.status, 0, "Course is not clickable on Dashboard page");
                })
                this.api.perform(function () {
                    testlog.info("Course is clicked successfully")
                })
            }
        }
    ]
}