KISSY.add('kg/sicon/0.0.1/index',["node","base"],function(S ,require, exports, module) {
 var $ = require('node').all;
var Base = require('base');

var Sicon = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = Sicon;




});