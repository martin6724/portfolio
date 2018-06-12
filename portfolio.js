$(document).ready(function () {
  console.log('hi there!');
$('.col-md-12').fadeIn("slow").removeClass('hidden');
$('.col-md-12').animate({ bottom: "15px" }, 'slow');

// $('.homebuttons').show();
// $('.hombuttons').animate({ opacity: 0 }, 0);
$('.homebuttons').animate({ opacity: 1, top: "-10px"}, 'slow');
});
