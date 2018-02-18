// component
const webGl = require('./webGl.ts');
const async = require('./barba.ts');

// library
declare const $: any;
declare const THREE: any;

$(function () {
  const test = new webGl.WebGLCompponent();
  // test.init();
  const test1 = new async.AsyncCompponent();
  test1.init();
})




