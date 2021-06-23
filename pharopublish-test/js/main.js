//////////////////// scaling //////////////////
var pageWidth, pageHeight;

var basePage = {
  width: 800,
  height: 600,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

$(function () {
  var $page = $(".page_content");

  getPageSize();
  scalePages($page, pageWidth, pageHeight);

  //using underscore to delay resize method till finished resizing window
  $(window).resize(
    _.debounce(function () {
      getPageSize();
      scalePages($page, pageWidth, pageHeight);
    }, 150)
  );

  function getPageSize() {
    pageHeight = $("#container").height();
    pageWidth = $("#container").width();
  }

  function scalePages(page, maxWidth, maxHeight) {
    var scaleX = 1,
    scaleY = 1;
    scaleX = maxWidth / basePage.width;
    scaleY = maxHeight / basePage.height;
    basePage.scaleX = scaleX;
    basePage.scaleY = scaleY;
    basePage.scale = scaleX > scaleY ? scaleY : scaleX;

    var newLeftPos = Math.abs(
      Math.floor((basePage.width * basePage.scale - maxWidth) / 2)
    );
    var newTopPos = Math.abs(
      Math.floor((basePage.height * basePage.scale - maxHeight) / 2)
    );

    page.attr(
      "style",
      "-webkit-transform:scale(" +
      basePage.scale +
      ");left:" +
      newLeftPos +
      "px;top:" +
      0 +
      "px;"
    );
  }
});
////////////////////////// End Scaling ///////////////////////////
$(document).click(function(e){
  // Check if select-selected was triggered
  if( $(e.target).hasClass('select-selected') ) {
    return;
  }

  // Otherwise
  else{
    $('.select-items').css('display','none')
  }
});
// on click next btn
$(".nextBtn").click(function(){
  $(this).addClass("disabled");
  $('.backBtn').removeClass('disabled');
  $('.pageNumber').text('2 of 2');
});

// on click prev btn
$(".backBtn").click(function(){
  $(this).addClass("disabled");
  $('.nextBtn').removeClass('disabled');
  $('.pageNumber').text('1 of 2');
});

$('.select-selected').click(function(){
  $('.select-items').css('display','none');
  $(this).siblings().css('display','block');
});

function show_active_answers() {
  if( $('.active .question').first().hasClass('question_1') ){
    $('.active .queDropDown .select-selected').text('✓');
    $('.active .dropDown_3 .select-selected').text('✗');
  }else{
    $('.active .dropDown_6 .select-selected').text('✗');
    $('.active .dropDown_7 .select-selected').text('✗');
    $('.active .dropDown_5 .select-selected').text('✓');
    $('.active .dropDown_8 .select-selected').text('✓');
  }
}
// on show btn clicked
$('.showAnsBtn').click(function(){
  $('.active .question').addClass('disabled');
  show_active_answers();
});

// on click reload btn screen
$('.reloadBtnScreen').click(function(){
  $('.active .queDropDown .select-selected').text('');
  $('.active .question').removeClass('disabled');
});

// on reload btn
$('.reloadBtnAll').click(function(){
  $('.question').removeClass('disabled');
  $(".backBtn").trigger('click');
  $('.select-selected').text('');
});

function incorrect() {
  setTimeout(function(){ $('.incorrect-color').removeClass('incorrect-color') }, 2000);
  var audio = document.getElementById("incorrect");
  audio.play();
}

function correct() {
  var audio = document.getElementById("correct");
  audio.play();
}

$('.select-items div').click(function(){
  var result = $(this).attr('dataans');
  if (result == "correct"){
    correct();
    $(this).parents().eq(1).children().first().text($(this).text());
    $(this).parents().eq(2).addClass('disabled');
  }else{
    $(this).parents().eq(1).children().first().addClass('incorrect-color');
    incorrect();
  }
});
