var createStripScriptPreprocessor = function(logger) {
    var log = logger.create('preprocessor.ng-stripScript');

    //remove script tag
    return function(content,file,done) {
        done(content.replace(/<\s*\/?\s*script\s*.*?>/g,""));
    };
};

createStripScriptPreprocessor.$inject=['logger'];

module.exports = createStripScriptPreprocessor;