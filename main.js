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
 /*$('#myFormh').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url : '',
            type: "POST",
            data: $('#myFormh').serialize(),
            /*success: function (data) {
                saveSettings();
				loadSettings();
            },
           /* error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    });*/
   $("#GOD").click(saveSettings);
	loadSettings();
    $("#GOD1").click(saveSettings1);
	loadSettings1();
	   $("#GOD2").click(saveSettings2);
	   $("#smalpetrltag").text(localStorage.smalpet);
$("#smaldieseltag").text(localStorage.smaldie);
$("#smalcngtag").text(localStorage.smalcng);
		//loadSettings2();
			    $("#GOD11").click(saveSettings11);
				$("#medpetrltag").text(localStorage.medpet);
$("#meddieseltag").text(localStorage.meddie);
$("#medcngtag").text(localStorage.medcng);
					//loadSettings11();
					    $("#GOD12").click(saveSettings12);
						$("#largepetrltag").text(localStorage.largepet);
$("#largedieseltag").text(localStorage.largedie);
$("#largecngtag").text(localStorage.largecng);	
						//	loadSettings12();
	    $("#GOD13").click(saveSettings13);
		 $("#2wheeltag").text(localStorage.twowheel);
			//loadSettings13();
	    $("#GOD3").click(saveSettings3);
			$("#autotag").text(localStorage.auto);
$("#taxitag").text(localStorage.taxi);
$("#bustag").text(localStorage.bus);
//	loadSettings3();		
	$("#GOD4").click(saveSettings4);
			$("#domtag").text(localStorage.domair);
$("#inttag").text(localStorage.intair);
	//	loadSettings4();
	    $("#GOD5").click(saveSettings5);
		 $("#traintag").text(localStorage.train);
		//	loadSettings5();
$('#fuel-type').change(godpls);
$('#final').submit(function()
{
	localStorage.trav=parseInt((localStorage.trav0))+parseInt((localStorage.trav1))+parseInt((localStorage.trav2))+parseInt((localStorage.trav3))+parseInt((localStorage.trav4))+parseInt((localStorage.trav5))+parseInt((localStorage.trav6));
	if(parseInt(localStorage.trav)==0){

	alert("Travel calculation not complete");
			return false;}
	else if(parseInt(localStorage.home)==0)
	{
	
		alert("home energy calculation not complete");
			return false;
	}
	else if(parseInt(localStorage.wastecal)==0)
	{ 
		alert("Waste calculation not complete");
		return false;
	}
	/*else
		$("#myFormfinal").attr(action="boot5.html#section1");*/
});
})
function godpls()
{
	if(parseFloat($('#fuel-type option:selected').val())===2.9910628)
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
}
function loadSettings1()
{
    $('#waste1').val(localStorage.waste);
}
function saveSettings2()
{
    localStorage.smalpet = $('#smalpetrol').val();
    localStorage.smaldie = $('#smaldiesel').val();
    localStorage.smalcng = $('#smalcng').val();	
	localStorage.trav0=parseInt((localStorage.smalpet*0.16061*12))+parseInt((localStorage.smaldie*0.14701*12))+parseInt((localStorage.smalcng*0.18672*12));
	$("#smalpetrltag").text(localStorage.smalpet);
$("#smaldieseltag").text(localStorage.smaldie);
$("#smalcngtag").text(localStorage.smalcng);
return false;
}
function saveSettings11()
{
    localStorage.medpet = $('#medpetrol').val();
    localStorage.meddie = $('#meddiesel').val();
    localStorage.medcng = $('#medcng').val();
localStorage.trav1=parseInt((localStorage.medpet*0.20088*12))+parseInt((localStorage.meddie*0.1772*12))+parseInt((localStorage.medcng*0.16484*12));
$("#medpetrltag").text(localStorage.medpet);
$("#meddieseltag").text(localStorage.meddie);
$("#medcngtag").text(localStorage.medcng);	
return false;
}
function saveSettings12()
{
    localStorage.largepet = $('#largepetrol').val();
    localStorage.largedie = $('#largediesel').val();
    localStorage.largecng = $('#largecng').val();
localStorage.trav2=parseInt((localStorage.largepet*0.29014*12))+parseInt((localStorage.largedie*0.23049*12))+parseInt((localStorage.largecng*0.23748*12));
$("#largepetrltag").text(localStorage.largepet);
$("#largedieseltag").text(localStorage.largedie);
$("#largecngtag").text(localStorage.largecng);	
return false;
}
function saveSettings13()
{
 localStorage.twowheel = $('#twowheel').val();
 localStorage.trav3=(localStorage.twowheel*0.11955*12);
 $("#2wheeltag").text(localStorage.twowheel);
return false;
 }
function saveSettings3()
{
 localStorage.auto = $('#auto').val();
    localStorage.taxi = $('#taxi').val();
	    localStorage.bus = $('#bus').val();
	localStorage.trav4=parseInt((localStorage.auto*0.2547*12))+parseInt((localStorage.bus*0.066486883*12))+parseInt((localStorage.taxi*0.142915729*12));
	$("#autotag").text(localStorage.auto);
$("#taxitag").text(localStorage.taxi);
$("#bustag").text(localStorage.bus);
return false;
}
function saveSettings4()
{
 localStorage.domair = $('#domestic').val();
    localStorage.intair = $('#international').val();
	localStorage.trav5=parseInt((localStorage.domair*0.17147*12))+parseInt((localStorage.intair*0.105095*12));
		$("#domtag").text(localStorage.domair);
$("#inttag").text(localStorage.intair);
return false;
}
function saveSettings5()
{
 localStorage.train = $('#train').val();
 localStorage.trav6=(localStorage.train*0.101283756*12);
 $("#traintag").text(localStorage.train);
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
}
function loadSettings() {
    $('#people').val(localStorage.people);
    $('#watt').val(localStorage.watt);
$("#fuel-type").val(localStorage.conctn);
   $("#amount-fuel").val(localStorage.amountfuel);
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