const {SpecReporter} = require('jasmine-spec-reporter');
const {JUnitXmlReporter} = require('jasmine-reporters');

exports.config = {
  allScriptsTimeout: 600000,
  suites: {
    mainFunctionalitiesCheck: 'specs/**.e2e.ts'
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      prefs: {'profile.managed_default_content_settings.notifications': 1},
      args: ['--window-size=1200,600', 'disable-infobars', '--lang=en']
    },
  },
  directConnect: true,
  baseUrl: 'https://concisesoftware.com/rzeszow/',
  framework: 'jasmine',
  displayStacktrace: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 610000,
    print: () => {}
  },

  onPrepare() {

    require('ts-node').register({
      project: 'tsconfig.json'
    });

    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: false}}));
    jasmine.getEnv().addReporter(new JUnitXmlReporter({
      consolidateAll: true,
      savePath: './testresults',
      filePrefix: 'xmlresults'
    }));
  },
  onComplete() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then((caps) => {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        screenshotsOnlyOnFailure: true,
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './testresults/',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './testresults/',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        testPlatform: platform
      };
      new HTMLReport().from('./testresults/xmlresults.xml', testConfig);
    });
  }
};
