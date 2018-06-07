$("#toggle-nav").click(function() {
    $("#toggle-nav").hide();
    $("#close-nav").show();
    $(".modal").fadeIn();
});
$("#close-nav").click(function() {
    $(".modal").fadeOut();
    $("#close-nav").hide();
    $("#toggle-nav").show();
});
window.onscroll = () => {
const a = document.querySelector('.navbar');
const b = document.querySelector('.nav-left');
const x = document.querySelector('#xl-nav-home');
const y = document.querySelector('#xl-nav-work');
const z = document.querySelector('#xl-nav-contact');
if(this.scrollY > 500) a.style = 'background: #333; position: fixed; z-index: 1; animation-name: transition; animation-duration: 0.3s;' ;
    else a.style='';
if(this.scrollY > 500) b.style = 'display: block;'
    else b.style='';
if(this.scrollY > 400) x.style="";
    else x.style="color: orange;"
if(this.scrollY > 400 && this.scrollY < 1400) y.style="color: orange;animation-name: transition; animation-duration: 0.3s;";
    else y.style='';
if(this.scrollY > 1401) z.style="color: orange;animation-name: transition; animation-duration: 0.3s;";
    else z.style='';
};
$("#bottom").click(function() {
    $('html,body').animate({
    scrollTop: $(".profile").offset().top},
    'slow');
});
//xl
$("#xl-nav-home").click(function() {
    $('html,body').animate({
    scrollTop: $(".bg-img").offset().top},
    'slow');
});
$("#xl-nav-work").click(function() {
    $('html,body').animate({
    scrollTop: $(".content").offset().top},
    'slow');
});
$("#xl-nav-contact").click(function() {
    $('html,body').animate({
    scrollTop: $(".profile").offset().top},
    'slow');
});
//sm
$("#sm-nav-home").click(function() {
    $('html,body').animate({
    scrollTop: $(".bg-img").offset().top},
    'slow');
    $('.modal').fadeOut();
    $('#close-nav').hide();
    $('#toggle-nav').fadeIn();
});
$("#sm-nav-work").click(function() {
    $('html,body').animate({
    scrollTop: $(".content").offset().top},
    'slow');
    $('.modal').fadeOut();
    $('#close-nav').hide();
    $('#toggle-nav').fadeIn();
});
$("#sm-nav-contact").click(function() {
    $('html,body').animate({
    scrollTop: $(".profile").offset().top},
    'slow');
    $('.modal').fadeOut();
    $('#close-nav').hide();
    $('#toggle-nav').fadeIn();
});				