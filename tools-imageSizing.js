//---------------------------------
// Image Size Calculator
//---------------------------------
$ = require('jquery');

function imageSizing () {

  // setup
  var $sW = $('[name="source-width"]'),
      $sH = $('[name="source-height"]'),
      $tW = $('[name="target-width"]'),
      $tH = $('[name="target-height"]'),
      rTo = '',
      val = '',
      num = [8, 38, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];

  // width
  $tW.keyup(function (e) {
    if ( num.indexOf(e.keyCode) > -1 ) {
      rTo = $sW.val() / $sH.val();
      val = Math.floor( $(this).val() / rTo );
      $tH.val(val);
    }
  });

  // height
  $tH.keyup(function (e) {
    if ( num.indexOf(e.keyCode) > -1 ) {
      rTo = $sH.val() / $sW.val();
      val = Math.floor( $(this).val() / rTo );
      $tW.val(val);
    }
  });

};

imageSizing();