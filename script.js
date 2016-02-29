$( document ).ready(function() {

var cat_count = 0;
var click_num = 0;
var name = $("#name");
var image_container = $('#image_container');

set_picture();
set_count();


$(document).on('click', '.badge', function() {
  name.text(cat_arr[this.value][1]);
    image_cont.html("<img src='" + cat_arr[this.value][0] + "'>");
    cat_count = index;
});

function set_picture() {
  
  $("#name").text(cat_arr[cat_count][1]);
  $('#image_container').html("<img src='" + cat_arr[cat_count][0] + "'>");
  set_count();
}

function set_count() {
  $('#click_number').text(click_num);
}

$(document).on('click', '#image_frame', function() {

  cat_count++;
  click_num++;
  set_picture();
  set_count();
  if (cat_count === cat_arr.length - 1)
    cat_count = -1;
    

});
});

