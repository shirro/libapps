// Copyright (c) 2013 The Chromium OS Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var testManager;
var testRun;

window.onload = function() {
  lib.rtdep('lib.wam.Channel.Tests', 'lib.wam.fs.Tests');

  lib.init(lib.f.alarm(function() {
    testManager = new lib.TestManager();
    testRun = testManager.createTestRun({window: window});

    // Stop after the first failure to make it easier to debug in the
    // JS console.
    testRun.maxFailures = 1;

    testRun.selectPattern(testRun.ALL_TESTS);
    testRun.run();

  }), console.log.bind(console));
};
