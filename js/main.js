var $ = require("jquery");
var item = require("item");
var list = require("list");

var $todoInput = $("[data-js='todo_input']"),
    $todoForm = $("[data-js='todo_form']"),
    $todoLog = $("[data-js='todo_log']"),
    $itemCount = $("[data-js='item_counter']"),
    $todoIcon = $("[data-js='todo_icon']"),
    $selectedItem = [];
    // $elText = $(e.target);

$(function(){

  // prevent default on submit
    $todoForm.on("submit", function(e){
      e.preventDefault();
    });

  // blank todo item with a placeholder of "type todo item here"
  // type more than 2 characters then return key to create the item

  $todoInput.on("keyup", function(e){
    var $elText = $(e.target);
    $todolog = [];
    $selectedItem = [];
    $itemCount = 0;
    if (e.keyCode === 13 && $elText.val().length > 1) {

      item.logPrepend($elText.val());

      //Clear value after
      $elText.val("");

      var $todoItem = $("[data-js='todo_item']");

      var $count = $todoLog.children().length;

          var $todoItem = $("[data-js='todo_item']");
          $todoItem.on("click", function(e){
            $selectedItem = $(e.target);
            $selectedItem.toggleClass("highlight");

          });
        }
      });

    item.countItem();


    var $todoIcon = $("[data-js='todo_icon']");

    $todoLog.on("click","i", function(e){
      $(e.target).toggleClass("item__completed--icon");
    });

    var $todoItem = $("[data-js='todo_item']");

    $todoLog.on("click","i", function(e){
      $(e.target).parent().toggleClass("item__completed--text");
    });

  });
