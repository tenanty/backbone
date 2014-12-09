/**
 * Created by yuanshun on 2014/12/5.
 */
require.config({
    baseUrl: "lib",
    paths:{
        jquery:"jquery-1.11.1.min"
    }
});
require(['jquery', 'underscore', 'backbone'], function (jquery, underscore, backbone){
    console.log("i am main.js");
    jquery("#target").html("helloworld.....");
});
