/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {

  name: 'ember-bowser',

  included: function(app) {
    this._super.included.apply(this, arguments);
    var vendor = this.treePaths.vendor;
    app.import(vendor + '/bowser/bowser.js', {
      exports: {
        'bowser': ['default']
      }
    });
  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    var nodeModules = path.join(__dirname, 'node_modules');
    var bowserPath = path.dirname(require.resolve('bowser'));
    trees.push(new Funnel(bowserPath, {
      destDir: 'bowser',
      include: ['bowser.js'],
    }));
    return mergeTrees(trees);
  }
};
