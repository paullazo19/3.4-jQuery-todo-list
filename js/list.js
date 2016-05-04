var $ = require("jquery");

//variables
var $todoInput = $("[data-js='todo_input']");
var $todoLog = $("[data-js='todo_log']");
var $itemCount = $("[data-js='item_counter']");

this.deleteItem = function(){

  $todoLog.on("click", "[data-js='todo_item']", function(e){

    $selectedItem = $(e.target);
    $selectedItem.toggleClass("highlight");

    var $body = $("[data-js='body']");

    $body.on("keyup", function(e){

      if (e.keyCode === 8 && $selectedItem.length > 0) {
        $selectedItem.remove();
        var $count = $todoLog.children().length;
        $itemCount.html($count);
      }
    });

  });
}

this.countItem = function(){

  $todoInput.on("keyup", function(e){
    var $itemCount = $("[data-js='item_counter']");
    if (e.keyCode === 13) {

      var $count = $todoLog.children().length;

      $itemCount.html($count);

    }
  });
}
