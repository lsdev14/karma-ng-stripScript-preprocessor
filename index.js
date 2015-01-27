var createStripScriptPreprocessor = function(logger) {
    var log = logger.create('preprocessor.ng-stripScript');
//remove script tag

    return function(content, file, done) {
        done(null, content.replace(/<\s*\/?\s*script\s*.*?>/g,""));
    };
};

createStripScriptPreprocessor.$inject = ['logger'];

module.exports = {
    'preprocessor:ng-stripScript': ['factory', createStripScriptPreprocessor]
};