'use strict';

const shell = require('shelljs');

/**
 * Сервис снятия измерений
 */
class MeasureService {
    /**
     * Измерить
     */
    measure() {
        const value = shell.cat('/sys/devices/virtual/thermal/thermal_zone0/temp');
        return value.toString();
    }
}

module.exports = new MeasureService();