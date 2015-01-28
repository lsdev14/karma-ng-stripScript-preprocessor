# karma-ng-stripScript-preprocessor

> Preprocessor to strip script tag from HTML files to [AngularJS](http://angularjs.org/) templates.


[![Build Status](https://travis-ci.org/lsdev14/karma-ng-stripScript-preprocessor.svg?branch=master)](https://travis-ci.org/lsdev14/karma-ng-stripScript-preprocessor)

## Installation

You can simple do it by:
```bash
npm install karma-ng-stripScript-preprocessor --save-dev
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

###You can use another preprocessors together with ng-stripScript

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
