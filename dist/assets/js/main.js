
$(function () {
  "use strict";



  // Theme switcher 

  $("#LightTheme").on("click", function () {
    $("html").attr("class", "light-theme")
    localStorage.setItem("theme", "light-theme")
  }),


    $("#DarkTheme").on("click", function () {
      $("html").attr("class", "dark-theme")
      localStorage.setItem("theme", "dark-theme")
    }),


    $(".dark-mode-icon").on("click", function () {

      $(".mode-icon i").toggleClass("bi bi-brightness-high bi bi-moon")
      $("html").toggleClass("dark-theme")

      // Save theme preference to localStorage
      if ($("html").hasClass("dark-theme")) {
        localStorage.setItem("theme", "dark-theme")
      } else {
        localStorage.setItem("theme", "light-theme")
      }
    })

  // Load saved theme on page load
  $(document).ready(function () {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark-theme") {
      $("html").addClass("dark-theme")
      $(".mode-icon i").removeClass("bi-moon").addClass("bi-brightness-high")
    }
  })



  /* Back to top */
  $(document).ready(function () {
    $(window).on("scroll", function () {
      $(this).scrollTop() > 300 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
    }), $(".back-to-top").on("click", function () {
      return $("html, body").animate({
        scrollTop: 0
      }, 600), !1
    })
  })


  /* list active */
  $(function () {
    for (var e = window.location, o = $(".primary-menu li a").filter(function () {
      return this.href == e
    }).addClass("active").parent().addClass("active"); o.is("li");) o = o.parent("").addClass("show").parent("").addClass("active")
  })



});


