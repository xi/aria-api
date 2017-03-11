mocha.checkLeaks();
mocha.globals(['mochaResulsts']);
var runner = mocha.run();

// generate output for saucelabs
var flattenTitles = function(test) {
    var titles = [];
    while (test.parent.title) {
        titles.push(test.parent.title);
        test = test.parent;
    }
    return titles.reverse();
};

var failedTests = [];
var logFailure = function(test, err) {
    failedTests.push({
        name: test.title,
        result: false,
        message: err.message,
        stack: err.stack,
        titles: flattenTitles(test)
    });
};

runner.on('fail', logFailure);
runner.on('end', function(){
    window.mochaResults = runner.stats;
    window.mochaResults.reports = failedTests;
});
