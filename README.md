# ember-bowser

[![Build Status](https://travis-ci.org/akatov/ember-bowser.svg?branch=master)](https://travis-ci.org/akatov/ember-bowser)
[![npm Version](https://img.shields.io/npm/v/ember-cli-strophe-shim.svg?style=flat-square)](https://www.npmjs.org/package/ember-bowser)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-strophe-shim.svg)](http://emberobserver.com/addons/ember-bowser)
[![Ember badge](http://embadge.io/v1/badge.svg?start=1.0.0)](http://embadge.io/)

## Installation

```bash
ember install ember-bowser
```

## Usage

```js
import bowser from 'ember-bowser';
import Ember from 'ember';

Ember.Logger.log(`Your browser is ${ bowser.name } ${ bowser.version });
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
