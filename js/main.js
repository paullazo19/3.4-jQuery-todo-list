$(function(){

  //variables
  var $todoInput = $("[data-js='todo_input']");
  var $todoForm = $("[data-js='todo_form']");
  var $todoLog = $("[data-js='todo_log']");
  var $itemCount = $("[data-js='item_counter']");
  var $selectedItem = [];


  //prevent default on submit
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
      $todoLog.prepend(`

          <li class="todo__item" data-js="todo_item">
            <span class="item__marker"></span>
            ${$elText.val()}
          </li>
      `);

      //Clear value after
      $elText.val("");

      var $count = $todoLog.children().length;
      // console.log($count);
      // $itemCount = $count;


      var $todoItem = $("[data-js='todo_item']");

      $todoItem.on("click", function(e){
        $selectedItem = $(e.target);
      });
    }
  })

  // number of how many items are left in the todo list
  // delete a todo when selected with one click and press the delete key
  $todoInput.on("keyup", function(e){
    var $itemCount = $("[data-js='item_counter']");
    if (e.keyCode === 13) {

      var $count = $todoLog.children().length;
      $itemCount.html($count);

      var $body = $("[data-js='body']");
      $body.on("keyup", function(e){
        var $count = $todoLog.children().length;
        if (e.keyCode === 8 && $selectedItem.length > 0) {

          $selectedItem.remove();
          $itemCount.html($count);
        }
      });
    }

  });
});
