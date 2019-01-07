var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var noop = function () {
};

var jrunner = new Jasmine();
jrunner.configureDefaultReporter({print: noop});
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: true
    }
}));
jrunner.loadConfigFile();
jrunner.execute();