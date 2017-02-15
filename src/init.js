$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlinkyDancer
    // get the maker function for the kind of dancer we're supposed to make
    
    var dancerMakerFunction = window[dancerMakerFunctionName]; //makeBlinkyDancer Function

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
  });

  $('.addSillyButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var sillyMakerFunctionName = $(this).data('silly-maker-function-name'); //makeSillyDancer
    // get the maker function for the kind of dancer we're supposed to make
    
    var sillyMakerFunction = window[sillyMakerFunctionName]; //makeSillyDancer Function
    console.log(sillyMakerFunction)
    // make a dancer with a random position
    var dancer = new sillyMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
  });

  $('.addBearButton').on('click', function(event) {
    var bearMakerFunctionName = $(this).data('bear-maker-function-name'); //makeBlinkyDancer
    console.log(bearMakerFunctionName);

    var bearMakerFunction = window[bearMakerFunctionName]; 
    console.log(bearMakerFunction);

    // make a dancer with a random position
    var dancer = new bearMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
  });


});

