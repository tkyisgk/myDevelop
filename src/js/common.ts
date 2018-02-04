// component
const webGl = require('./webGl.ts');

// library
declare const $: any;
declare const THREE: any;

$(function () {
  const test = new webGl.WebGLCompponent();
  test.init();
})




