$(document).ready(function () {
  console.log('hi there!');
$('.intro-section').fadeIn("slow").removeClass('hidden');
$('.intro-section').animate({ bottom: "15px" }, 'slow');

// $('.homebuttons').show();
// $('.hombuttons').animate({ opacity: 0 }, 0);
$('.homebuttons').animate({ opacity: 1, top: "-10px"}, 'slow');
});
