//MixPanelAnalitycs
(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
mixpanel.init("de5cbda28df6cd7da2d56d44389c754d ")


var color = document.getElementById('color')
var power = document.getElementById('power')
var bulb = document.getElementById('bulb')
var button = document.getElementById('run-btn')
var light = document.getElementById('light')

button.onclick = function toggleBulbState () {
  changeBulbParams({ color: color.value, power: power.value })
  mixpanel.track("BulbPluginClicks")
}

function setBulbParams (params) {
  if (params.power === 'off') {
    params = { color: 'E7E7E7' }
  }
  console.log('set params', params)

  var light_rays = ['.l1','.l2','.l3','.l4','.l5',]

  document.querySelector('.lamp').style.background = params.color

  light_rays.forEach(function (className) {
    document.querySelector(className).style.background = params.color
  })
}

function changeBulbParams (params) {
  console.log('change params', params)
  /* Overwrite html fields if necessary */
  color.value = params.color || color.value
  power.value = params.power || power.value
  setBulbParams({color: color.value, power: power.value})
}