/**
 * Created by yuanshun on 2014/12/8.
 */
(function($){
    var Item = Backbone.Model.extend({
        defaults:{
            part1:'hello',
            part2:'world'
        }
    });
    var List = Backbone.Collection.extend({
        model:Item
    });
    var ListView = Backbone.View.extend({
        el:$('body'),
        events:{
            'click button#add':'addItem'
        },
        initialize:function(){
            console.log('initialize...');
            _.bindAll(this,'render','addItem','appendItem');
            this.collection = new List();
            this.collection.bind('add',this.appendItem);

            this.counter = 0;
            this.render();
        },
        render:function(){
            console.log('render...');
            var self = this;
            $(this.el).append("<button id='add'>增加</button>");
            $(this.el).append("<ul></ul>");
            _.each(this.collection.models,function(item){
                self.appendItem(item);
            },this);

        },
        addItem:function(){
            console.log("addItem......");
            this.counter++;
            var item = new Item();
            item.set({
                part2:item.get('part2')+this.counter
            });
            this.collection.add(item);
        },
        appendItem:function(item){
            console.log("appendItem...");
            $('ul',this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>")
        }

    });
    var listView = new ListView();
})(jQuery);