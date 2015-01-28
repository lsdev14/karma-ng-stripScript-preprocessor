var expect = require('expect.js');
var stripScript = require('../lib/stripScript.js');
var LOGGER_STUB = {
  create: function () {
    return {
      debug: function () {}
    };
  }
};

describe('stripScript',function() {

    describe('default behavior',function() {
        var compileFn=stripScript(LOGGER_STUB);
        var HTML_SNIPPET='<script id="test" type="text/ng-template"><div id="test" data-ng-show="content"></div></script>';
        var htmlStripScript='';

        before(function(done) {
            compileFn(HTML_SNIPPET,null,function(result) {
                htmlStripScript=result;
                done();
            });
        });

        it('should succeed',function() {
            console.log('     Before: ' + HTML_SNIPPET);            

            expect(htmlStripScript).to.eql('<div id="test" data-ng-show="content"></div>');
            
            console.log('     After:  '+htmlStripScript);
            console.log();
        });

    });
});

