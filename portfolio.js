$(document).ready(function () {
$('.col-md-12').fadeIn("slow").removeClass('hidden');
$('.col-md-12').animate({ top: "10px" }, 'slow');

$('.homebuttons').animate({ top: "-500px" }, 3000);
$('.homebuttons').fadeIn({queue: false, duration: 3000}).removeClass('hidden');
});
