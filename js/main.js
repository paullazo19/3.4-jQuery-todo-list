$(function(){

  //variables
  var $itemInput = $("[data-js='todo_item']");
  var $todoForm = $("[data-js='todo_form']");
  var $todoLog = $("[data-js='todo_log']");

  //prevent default on submit
  $todoForm.on("submit", function(e){
    e.preventDefault();
  });

  // blank todo item with a placeholder of "type todo item here"
  // type more than 2 characters then return key to create the item

  $($itemInput).on("keyup", function(e){
    // var $elText = $(e.target);
    if (e.keyCode === 13) {
      console.log("Bakon!");
    };

    if (e.target.value.length >= 2) {
      // console.log(e.target.val.length);
      $todoLog.prepend(`
          <li class="todo_item">
            ${$elText.val()}
          </li>
        `);
        //Clear value after
        $elText.val("");
    }
    // e.preventDefault();
  });

});
