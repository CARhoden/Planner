$(function () {
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    var timeBlockId = $(this).attr("id");
    var storedUserInput = localStorage.getItem(timeBlockId);


    $(this).find(".description").val(storedUserInput);
  });

  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });
});
