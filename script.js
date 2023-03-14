$(document).ready(function () {
  var displayTime = document.querySelector("#currentDay");
  var currentTime = dayjs().format("dddd, MMMM d, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
  });

  function hourTracker () {
    var currentHour = dayjs().hour();

    $(".time-block").each(function (){
    var blockHour= parseInt ($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourTracker();

function displayText() {
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();

});
