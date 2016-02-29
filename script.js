$( document ).ready(function() {

var cat_count = 0;
var click_num = 0;
var cat_arr = [
  ["https://sp.yimg.com/xj/th?id=OIP.Mfbf6d69bb0b3507debc73b5cbe1d4bdaH0&pid=15.1&P=0&w=300&h=300", "Larry"],
  ["https://sp.yimg.com/xj/th?id=OIP.Mdf3a61d3b316d8945472f0812cc7aaa7H0&pid=15.1&P=0&w=300&h=300", "Petunia"],
  ["https://sp.yimg.com/xj/th?id=OIP.Md83b37a5fedccae118950cc8fef7c517H0&pid=15.1&P=0&w=300&h=300", "Orville"],
  ["https://sp.yimg.com/xj/th?id=OIP.Mde51b8eebb812c65801594a69f8d209do0&pid=15.1&P=0&w=300&h=300", "Giggles"],
  ["https://sp.yimg.com/xj/th?id=OIP.Mde6bf15cff08fc542a9956c86373ab69H0&pid=15.1&P=0&w=300&h=300", "Fluffystiltzkin"]
];

set_picture();
set_count();

$(document).on('click', '.badge', function() {
  $("#name").text(cat_arr[this.value][1]);
    $('#image_container').html("<img src='" + cat_arr[this.value][0] + "'>");
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

