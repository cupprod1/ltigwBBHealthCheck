var config = require('./../../config/config.js')

describe('LTIGW - Health Check Test', function () {

  before(function (browser, done) {
    loginPage = browser.page['bbLogin.page']();
    dashboardPage = browser.page['bbdashboard.page']();
    contentPage = browser.page['content.page']();
    homePage = browser.page['home.page']();
    productLaunchPage = browser.page['productLaunch.page']();

    console.log("Launching URL: " + config[testEnv].loginUrl)
    done();
  });

  it('Scenario 1 - Student launches activity using LTIGateway in Blackboard', function (browser) {
    browser
      .url(config[testEnv].loginUrl).resizeWindow(800, 600)
    loginPage.waitForConsentDialogToAppear();
    loginPage.clickConsentDialogOkButton();
    loginPage.login(config[testEnv].student.email, config[testEnv].student.password);
    dashboardPage.clickCourse();
    homePage.clickContentTab();
    contentPage.clickPracticeExtra();
    productLaunchPage.isPageLaunched();
    
  });

  after(function (browser, done) {
    if (browser.sessionId) {
      browser.end(function () {
        done();
      });
    } else {
      done();
    }
  });

});