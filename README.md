# karma-ng-stripScript-preprocessor

> Preprocessor to strip script tag from HTML files to [AngularJS](http://angularjs.org/) templates.


[![Build Status](https://travis-ci.org/lsdev14/karma-ng-stripScript-preprocessor.svg?branch=master)](https://travis-ci.org/lsdev14/karma-ng-stripScript-preprocessor)

## Installation

Installation is simple using the following:
```bash
npm install karma-ng-stripscript-preprocessor --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    
    files: [
            'content/shared/views/**/*.jade'
    ],
    
    preprocessors: {
            'content/shared/views/**/*.jade': 'ng-stripScript'
    }

  });
};
```

## Example
##### Before
```js
<script id="test" type="text/ng-template"><div id="test" data-ng-show="content"></div></script>
```

##### After
```html
<div id="test" data-ng-show="content"></div>
```


## You can use other preprocessors together with ng-stripScript

```bash
npm install karma-ng-i18n-preprocessor --save-dev
npm install karma-ng-jade2js-preprocessor --save-dev
```

```js
// karma.conf.js
preprocessors: {
       'content/shared/views/**/*.jade': ['ng-i18n','ng-jade2js','ng-stripScript']
}
```

----

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com
