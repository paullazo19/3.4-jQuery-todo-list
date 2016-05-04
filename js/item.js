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


this.completeItem = function(){
  $todoLog.on("click","[data-js='todo_icon']", function(e){
    $(e.target).toggleClass("item__completed--icon");
    $(e.target).parent().toggleClass("item__completed--text");
  });

}
