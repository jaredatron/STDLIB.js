!function(){

  // Ensure that Jasmine library is loaded first
  if (!jasmine) {
    throw new Exception("[Jasmine JSONReporter] 'Jasmine' library not found");
  }

  function JSONReporter(){};
  jasmine.JSONReporter = JSONReporter;

  JSONReporter.prototype.reportRunnerStarting = noop;

  JSONReporter.prototype.reportSpecStarting = function(spec) {
    // Start timing this spec
    spec.startedAt = new Date();
  };

  JSONReporter.prototype.reportSpecResults = function(spec) {
    // Finish timing this spec and calculate duration/delta (in sec)
    spec.finishedAt = new Date();
    spec.duration = elapsed(spec.startedAt.getTime(), spec.finishedAt.getTime());
  };

  JSONReporter.prototype.reportSuiteResults = noop;

  JSONReporter.prototype.reportRunnerResults = function(runner) {
    var
      i, suite,
      suites  = runner.suites(),
      results = {
        suites: [],
        duration : 0,
        passed : true
      };

    // Loop over all the Suites
    for (i = suites.length - 1; i >= 0; i--) {
      suite = suites[i];
      if (!suite.parentSuite) {
        suite = getSuiteData(suite);
        results.suites.push(suite);
        // If 1 suite fails, the whole runner fails
        results.passed = results.passed ? suite.passed : false;
        // Add up all the durations
        results.duration += suite.duration;
      }
    };

    jasmine.results = JSON.stringify(results);
  };


  // private

  function noop() {}

  /**
   * Calculate elapsed time, in Seconds.
   * @param startMs Start time in Milliseconds
   * @param finishMs Finish time in Milliseconds
   * @return Elapsed time in Seconds */
  function elapsed(startMs, finishMs) {
    return (finishMs - startMs) / 1000;
  }

  /**
   * Round an amount to the given number of Digits.
   * If no number of digits is given, than '2' is assumed.
   * @param amount Amount to round
   * @param numOfDecDigits Number of Digits to round to. Default value is '2'.
   * @return Rounded amount */
  function round(amount, numOfDecDigits) {
    numOfDecDigits = numOfDecDigits || 2;
    return Math.round(amount * Math.pow(10, numOfDecDigits)) / Math.pow(10, numOfDecDigits);
  }

  /**
   * Collect information about a Suite, recursively, and return a JSON result.
   * @param suite The Jasmine Suite to get data from
   */
  function getSuiteData(suite) {
    var suiteData = {
        description : suite.description,
        duration : 0,
        specs: [],
        suites: [],
        passed: true
      },
      specs = suite.specs(),
      suites = suite.suites(),
      i, ilen;

    // Loop over all the Suite's Specs
    for (i = 0, ilen = specs.length; i < ilen; ++i) {
      suiteData.specs[i] = {
        description : specs[i].description,
        duration : specs[i].duration,
        passed : specs[i].results().passedCount === specs[i].results().totalCount,
        skipped : specs[i].results().skipped,
        passedCount : specs[i].results().passedCount,
        failedCount : specs[i].results().failedCount,
        totalCount : specs[i].results().totalCount
      };
      suiteData.passed = !suiteData.specs[i].passed ? false : suiteData.passed;
      suiteData.duration += suiteData.specs[i].duration;
    }

    // Loop over all the Suite's sub-Suites
    for (i = 0, ilen = suites.length; i < ilen; ++i) {
      suiteData.suites[i] = getSuiteData(suites[i]); //< recursive population
      suiteData.passed = !suiteData.suites[i].passed ? false : suiteData.passed;
      suiteData.duration += suiteData.suites[i].duration;
    }

    // Rounding duration numbers to 3 decimal digits
    suiteData.duration = round(suiteData.duration, 4);

    return suiteData;
  }

}();
