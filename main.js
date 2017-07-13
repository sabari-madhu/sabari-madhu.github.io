    $(document).ready(function() {
$(".blackboxelec").hide();
  $(".txtboxelec").hide();
  $(".txtelec").hide();
  $(".blackboxtravel").hide();
  $(".txtboxtravel").hide();
  $(".txttravel").hide();
  $(".blackboxairplane").hide();
  $(".txtboxairplane").hide();
  $(".txtairplane").hide();
  	$(".blackboxcng").hide();
  $(".txtboxcng").hide();
  $(".txtcng").hide();
	  $(".blackboxwaste").hide();
  $(".txtboxwaste").hide();
  $(".txtwaste").hide();
  $(".blackboxlpg").hide();
  $(".txtboxlpg").hide();
  $(".txtlpg").hide();
$("#elec").click(einto);
$("#travel").click(tinto);
$("#air").click(ainto);
$("#waste").click(winto);
$("#lpg").click(linto);
$("#cng").click(cinto);
    $("#GOD").click(saveSettings);
    $("#GOD1").click(saveSettings1);
	    $("#GOD2").click(saveSettings2);
			    $("#GOD11").click(saveSettings11);
					    $("#GOD12").click(saveSettings12);
	    $("#GOD13").click(saveSettings13);
	    $("#GOD3").click(saveSettings3);  
	$("#GOD4").click(saveSettings4);
	    $("#GOD5").click(saveSettings5);
$('#fuel-type').change(godpls);
})
function godpls()
{
	if($('#fuel-type option:selected').val()===2.9910628)
    $('#amount-fuel').prop('placeholder',"enter in Kg");
else
	$('#amount-fuel').prop('placeholder',"enter in cubic meter");
	}
	
	var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
function saveSettings1()
{
 localStorage.waste = $('#waste1').val();
	var wastecall=(localStorage.waste*12*0.289835514)/(localStorage.people);
	var was1=parseFloat(wastecall);
	var was2=was1.toFixed(2);
	localStorage.wastecal=was2;
	return false;
}
function saveSettings2()
{
    localStorage.smalpet = $('#smalpetrol').val();
    localStorage.smaldie = $('#smaldiesel').val();
    localStorage.smalcng = $('#smalcng').val();	
	localStorage.trav0=parseInt((localStorage.smalpet*0.16061*12))+parseInt((localStorage.smaldie*0.14701*12))+parseInt((localStorage.smalcng*0.18672*12));

	 return false;
}
function saveSettings11()
{
    localStorage.medpet = $('#medpetrol').val();
    localStorage.meddie = $('#meddiesel').val();
    localStorage.medcng = $('#medcng').val();
localStorage.trav1=parseInt((localStorage.medpet*0.20088*12))+parseInt((localStorage.meddie*0.1772*12))+parseInt((localStorage.medcng*0.16484*12));
	 return false;
}
function saveSettings12()
{
    localStorage.largepet = $('#largepetrol').val();
    localStorage.largedie = $('#largediesel').val();
    localStorage.largecng = $('#largecng').val();
localStorage.trav2=parseInt((localStorage.largepet*0.29014*12))+parseInt((localStorage.largedie*0.23049*12))+parseInt((localStorage.largecng*0.23748*12));
	 return false;
}
function saveSettings13()
{
 localStorage.twowheel = $('#twowheel').val();
 localStorage.trav3=(localStorage.twowheel*0.11955*12);
		return false;
}
function saveSettings3()
{
 localStorage.auto = $('#auto').val();
    localStorage.taxi = $('#taxi').val();
	    localStorage.bus = $('#bus').val();
	localStorage.trav4=parseInt((localStorage.auto*0.2547*12))+parseInt((localStorage.bus*0.066486883*12))+parseInt((localStorage.taxi*0.142915729*12));
		return false;
}
function saveSettings4()
{
 localStorage.domair = $('#domestic').val();
    localStorage.intair = $('#international').val();
	localStorage.trav5=parseInt((localStorage.domair*0.17147*12))+parseInt((localStorage.intair*0.105095*12));
	 return false;
}
function saveSettings5()
{
 localStorage.train = $('#train').val();
 localStorage.trav6=(localStorage.train*0.101283756*12);
	/*var travv=
	var travv1=parseFloat(travv);
	var travv2=travv1.toFixed(2);
	localStorage.trav=travv2;*/	
 return false;
}
function saveSettings() {
    localStorage.people = $('#people').val();
    localStorage.watt = $('#watt').val();
    localStorage.conctn = $("#fuel-type").val();
	localStorage.amountfuel= $("#amount-fuel").val();
	var perpeople=(localStorage.watt*12)/(localStorage.people);
var fuelamount=(localStorage.conctn*localStorage.amountfuel*12)/(localStorage.people);
var lhome=parseInt((perpeople*localStorage.emissionfactor))+parseInt(fuelamount);
		/*var wass1=parseFloat(lhome);
	var wass2=wass1.toFixed(2);
	localStorage.home=wass2;*/
	localStorage.home=lhome;
	return false;
}
function einto() {
  $(".blackboxelec").show();
  $(".txtboxelec").show();
  $(".txtelec").show();
  $(".blackboxtravel").hide();
  $(".txtboxtravel").hide();
  $(".txttravel").hide();
  $(".blackboxairplane").hide();
  $(".txtboxairplane").hide();
  $(".txtairplane").hide();
  	$(".blackboxcng").hide();
  $(".txtboxcng").hide();
  $(".txtcng").hide();
	  $(".blackboxwaste").hide();
  $(".txtboxwaste").hide();
  $(".txtwaste").hide();
  $(".blackboxlpg").hide();
  $(".txtboxlpg").hide();
  $(".txtlpg").hide();
  $(".blackbak").hide();
   $(".whitebak").hide();
   $("#msg").hide();
   $("#msgw").hide();
}
function tinto() {
  $(".blackboxelec").hide();
  $(".txtboxelec").hide();
  $(".txtelec").hide();
  $(".blackboxtravel").show();
  $(".txtboxtravel").show();
  $(".txttravel").show();
  $(".blackboxairplane").hide();
  $(".txtboxairplane").hide();
  $(".txtairplane").hide();
  	$(".blackboxcng").hide();
  $(".txtboxcng").hide();
  $(".txtcng").hide();
	  $(".blackboxwaste").hide();
  $(".txtboxwaste").hide();
  $(".txtwaste").hide();
  $(".blackboxlpg").hide();
  $(".txtboxlpg").hide();
  $(".txtlpg").hide();
  $(".blackbak").hide();
   $(".whitebak").hide();
   $("#msg").hide();
   $("#msgw").hide();
}
function ainto() {
  $(".blackboxelec").hide();
  $(".txtboxelec").hide();
  $(".txtelec").hide();
  $(".blackboxtravel").hide();
  $(".txtboxtravel").hide();
  $(".txttravel").hide();
  $(".blackboxairplane").show();
  $(".txtboxairplane").show();
  $(".txtairplane").show();
  	$(".blackboxcng").hide();
  $(".txtboxcng").hide();
  $(".txtcng").hide();
	  $(".blackboxwaste").hide();
  $(".txtboxwaste").hide();
  $(".txtwaste").hide();
  $(".blackboxlpg").hide();
  $(".txtboxlpg").hide();
  $(".txtlpg").hide();
  $(".blackbak").hide();
   $(".whitebak").hide();
   $("#msg").hide();
   $("#msgw").hide();
 
}
function winto() {
 $(".blackboxelec").hide();
  $(".txtboxelec").hide();
  $(".txtelec").hide();
  $(".blackboxtravel").hide();
  $(".txtboxtravel").hide();
  $(".txttravel").hide();
  $(".blackboxairplane").hide();
  $(".txtboxairplane").hide();
  $(".txtairplane").hide();
	$(".blackboxcng").hide();
  $(".txtboxcng").hide();
  $(".txtcng").hide();
	  $(".blackboxwaste").show();
  $(".txtboxwaste").show();
  $(".txtwaste").show();
  $(".blackboxlpg").hide();
  $(".txtboxlpg").hide();
  $(".txtlpg").hide();
  $(".blackbak").hide();
   $(".whitebak").hide();
   $("#msg").hide();
   $("#msgw").hide();

}
function linto() {
	$(".blackboxelec").hide();
  $(".txtboxelec").hide();
  $(".txtelec").hide();
  $(".blackboxtravel").hide();
  $(".txtboxtravel").hide();
  $(".txttravel").hide();
  $(".blackboxairplane").hide();
  $(".txtboxairplane").hide();
  $(".txtairplane").hide();
	$(".blackboxcng").hide();
  $(".txtboxcng").hide();
  $(".txtcng").hide();
	  $(".blackboxwaste").hide();
  $(".txtboxwaste").hide();
  $(".txtwaste").hide();
  $(".blackboxlpg").show();
  $(".txtboxlpg").show();
  $(".txtlpg").show();
  $(".blackbak").hide();
   $(".whitebak").hide();
   $("#msg").hide();
   $("#msgw").hide();

}
function cinto() {
 $(".blackboxelec").hide();
  $(".txtboxelec").hide();
  $(".txtelec").hide();
  $(".blackboxtravel").hide();
  $(".txtboxtravel").hide();
  $(".txttravel").hide();
  $(".blackboxairplane").hide();
  $(".txtboxairplane").hide();
  $(".txtairplane").hide();
  	$(".blackboxcng").show();
  $(".txtboxcng").show();
  $(".txtcng").show();
	  $(".blackboxwaste").hide();
  $(".txtboxwaste").hide();
  $(".txtwaste").hide();
  $(".blackboxlpg").hide();
  $(".txtboxlpg").hide();
  $(".txtlpg").hide();
   $(".blackbak").hide();
   $(".whitebak").hide();
   $("#msg").hide();
   $("#msgw").hide();
}