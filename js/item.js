var $ = require("jquery");

// variables
var $todoLog = $("[data-js='todo_log']"),
    $itemCount = $("[data-js='item_counter']"),
    $todoInput = $("[data-js='todo_input']"),
    $selectedItem = [];

this.logPrepend = function(textVal){
  $todoLog.prepend(`

      <li class="todo__item" data-js="todo_item">
        <i class="fa fa-check fa-lg" aria-hidden="true" data-js="todo_icon"></i>
        ${textVal}
      </li>
  `);
  }

this.countItem = function(){

  $todoInput.on("keyup", function(e){
    var $itemCount = $("[data-js='item_counter']");
    if (e.keyCode === 13) {

      var $count = $todoLog.children().length;
      
      $itemCount.html($count);

      var $body = $("[data-js='body']");
      $body.on("keyup", function(e){

        $selectedItem = $(e.target);
        var $count = $todoLog.children().length;
        if (e.keyCode === 8 && $selectedItem.length > 0) {

          $selectedItem.remove();
          $itemCount.html($count);
        }
      });
    }
  });
}
