// ==UserScript==
// @name        Neopets - Turdle Betting Auto
// @namespace   Jarofgrease.captainmaxthecat.com
// @author      demeiz
// @email       admin@captainmaxthecat.com
// @license     GNU GPL
// @homepage    http://jarofgrease.captainmaxthecat.com
// @version     1.0
// @language    en
// @include     http://www.neopets.com/medieval/turdlebetting.phtml
// @require	    http://code.jquery.com/jquery-latest.min.js
// @grant       none
// ==/UserScript==

var loc = document.location.href;

if (loc.match('neopets.com/medieval/turdlebetting.phtml')){
var goin = document.getElementsByName('turdle')[0];
  if (goin){
    goin.options.selectedIndex = Math.floor((Math.random() * 5) + 1);
  }
}

$("input[name='bet']").val(1500);
$("input[value='Place your Bet!']").click();
