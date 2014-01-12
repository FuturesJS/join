(function () {
  'use strict';

  var Join = require('./join').Join
    , join = Join.create()
    , aCb
    , bCb
    , cCb
    ;

  aCb = join.add();
  bCb = join.add();
  cCb = join.add();

  setTimeout(function () {
    aCb('I');
    bCb('Love');
  });
  
  join.then(function (aArgs, bArgs, cArgs) {
    console.log(aArgs[0], bArgs[0], cArgs[0]);
  });

  cCb('JavaScript');
}());
