var shell = require('shelljs');
var temp = shell.cat('/sys/devices/virtual/thermal/thermal_zone0/temp');
console.log(temp.toString());

