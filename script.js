$(document).ready(function () {

  $("#changeTextBtn").click(function () {
    $("#mainTitle").text("Welcome to ECLAT");
    $(".intro-text").html("<strong>Modern fashion</strong>, clean girl aesthetic, model-off-duty looks and quiet luxury.");
  });

  $("#styleBtn").click(function () {
    $("#mainTitle").css({
      "color": "#8b5e3c",
      "letter-spacing": "2px"
    });

    $(".intro-text").css({
      "font-size": "24px",
      "color": "#5c4435"
    });
  });

  $("#changeBackgroundBtn").click(function () {
    $("body").toggleClass("changed-background");
  });

  let mainPhotoChanged = false;

  $("#changeImageBtn").click(function () {

    if(mainPhotoChanged === false){

      $("#mainImage").attr("src", "images/runway-style.png");

      mainPhotoChanged = true;

    } else {

      $("#mainImage").attr("src", "images/banner.png");

      mainPhotoChanged = false;

    }

  });

  $("#hideBtn").click(function () {
    $("#fashionParagraph").hide(500);
  });

  $("#showBtn").click(function () {
    $("#fashionParagraph").show(500);
  });

  $("#toggleBtn").click(function () {
    $("#fashionParagraph").toggle(500);
  });

  $("#fadeOutBtn").click(function () {
    $("#fadeImage").fadeOut(800);
  });

  $("#fadeInBtn").click(function () {
    $("#fadeImage").fadeIn(800);
  });

  $("#fadeToggleBtn").click(function () {
    $("#fadeImage").fadeToggle(800);
  });

  $("#slideToggleBtn").click(function () {
    $("#stylePanel").slideToggle(700);
  });

  $("#changeLinkBtn").click(function () {
    $("#fashionLink")
      .attr("href", "https://www.harpersbazaar.com/fashion/")
      .text("Open Harper's Bazaar Fashion");
  });

  $("#galleryFadeOut").click(function () {
    $(".thumb").fadeOut(700);
  });

  $("#galleryFadeIn").click(function () {
    $(".thumb").fadeIn(700);
  });

  $(".thumb").click(function () {
    $(this).toggleClass("big-photo");
  });

  $("#galleryReset").click(function () {
    $(".thumb").removeClass("big-photo").fadeIn(500);
  });

  $(".accordion-title").click(function () {
    $(this).next(".accordion-content").slideToggle(500);
    $(".accordion-content").not($(this).next()).slideUp(500);
  });

  $("#appendItem").click(function () {
    $("#fashionList").append("<li>Gold earrings</li>");
  });

  $("#prependItem").click(function () {
    $("#fashionList").prepend("<li>Black sunglasses</li>");
  });

  $("#removeItem").click(function () {
    $("#fashionList li:last").remove();
  });

  $("#sortItems").click(function () {
    let items = $("#fashionList li").get();

    items.sort(function (a, b) {
      return $(a).text().localeCompare($(b).text());
    });

    $("#fashionList").empty().append(items);
  });

  $(".likeBtn").click(function () {
    let likeText = $(this).next(".likeText");
    let likes = parseInt(likeText.text().replace("Likes: ", ""));
    likes++;
    likeText.text("Likes: " + likes);
  });

  $("#animateOne").click(function () {
    $("#squareBox").animate({
      left: "300px",
      top: "120px",
      width: "150px",
      height: "150px"
    }, 900);
  });

  $("#animateSteps").click(function () {
    $("#squareBox")
      .animate({ left: "350px" }, 600)
      .animate({ top: "180px" }, 600)
      .animate({ width: "60px", height: "60px" }, 600)
      .animate({
        left: "20px",
        top: "20px",
        width: "90px",
        height: "90px"
      }, 600);
  });

  $("#animateCombo").click(function () {
    $("#squareBox").animate({
      left: "450px",
      top: "150px",
      width: "170px",
      height: "170px",
      opacity: 0.4
    }, 1000);
  });

  $("#resetSquare").click(function () {
    $("#squareBox").animate({
      left: "20px",
      top: "20px",
      width: "90px",
      height: "90px",
      opacity: 1
    }, 500);
  });

  $("#bounceBall").click(function () {
    $("#ball")
      .animate({ left: "80%", top: "210px" }, 700)
      .animate({ left: "55%", top: "20px" }, 700)
      .animate({ left: "25%", top: "210px" }, 700)
      .animate({ left: "20px", top: "20px" }, 700);
  });

  $("#resetBall").click(function () {
    $("#ball").animate({
      left: "20px",
      top: "20px"
    }, 400);
  });

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  $("#guessBtn").click(function () {
    let guess = Number($("#guessInput").val());

    if ($("#guessInput").val() === "" || guess < 1 || guess > 10) {
      $("#gameResult").text("Please enter a number from 1 to 10.");
    } else if (guess === randomNumber) {
      $("#gameResult").text("Correct! You guessed the number.");
    } else if (guess < randomNumber) {
      $("#gameResult").text("Too low. Try again.");
    } else {
      $("#gameResult").text("Too high. Try again.");
    }
  });

  $("#newGameBtn").click(function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    $("#guessInput").val("");
    $("#gameResult").text("New game started.");
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    let name = $("#nameInput").val();
    let email = $("#emailInput").val();
    let message = $("#messageInput").val();

    if (name === "" || email === "" || message === "") {
      $("#formResult").text("Please fill in all fields.");
    } else if (!email.includes("@")) {
      $("#formResult").text("Please enter a valid email.");
    } else {
      $("#formResult").text("Form submitted successfully!");
      $("#contactForm")[0].reset();
    }
  });

  $("#dateTimeBtn").click(function () {
    let now = new Date();
    $("#dateTimeText").text("Current date and time: " + now.toLocaleString());
  });

  $("#addTodoBtn").click(function () {
    let task = $("#todoInput").val();

    if (task === "") {
      alert("Please enter a task.");
    } else {
      $("#todoList").append("<li>" + task + "</li>");
      $("#todoInput").val("");
    }
  });

  $("#todoList").on("click", "li", function () {
    $(this).toggleClass("completed-task");
  });

  $("#clearTodoBtn").click(function () {
    $("#todoList").empty();
  });

});