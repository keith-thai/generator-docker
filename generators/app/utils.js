/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';
var os = require('os');

module.exports = {
    /**
     * Gets a value indicating if host is Windows or not.
     * @returns {boolean}
     */
    isWindows: function () {
        return os.platform() === 'win32';
    },

    /**
     * Gets the destination script name based on the platform.
     * @returns {string}
     */
    getDestinationScriptName: function () {
        return this.isWindows() ? 'dockerTask.ps1' : 'dockerTask.sh';
    },

    /**
     * Formats the variable name based on the platform.
     * For example: %variableName% for win32 platform or $variableName.
     * @param {string} variableName
     * @returns {string}
     */
    scriptify: function (variableName) {
        return this.isWindows() ? '%' + variableName + '%' : '$' + variableName;
    },
};