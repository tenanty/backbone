/**
 * Created by yuanshun on 2014/12/8.
 */

(function($){
    var ListView = Backbone.View.extend({
        el:$('body'),
        initialize:function(){
            _.bindAll(this,'render');
            this.render();
        },
        render:function(){
            console.log("helloWorld.js:render")
            $(this.el).append("<ul><li>helloWorld...</li></ul>");
        }
    });
    var listView = new ListView();
})(jQuery);