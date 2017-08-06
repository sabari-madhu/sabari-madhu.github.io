$("#know1").hide();
$("#know2").hide();
$("#know3").hide();
$("#txt0").hide();
$("#txt1").hide();
$("#txt2").hide();
$("#txt3").hide();
$("#oval1").hide();
$("#oval2").hide();
$("#oval3").hide();
$("#whitebak").hide();


function fadeshow()
{
	if($('#know1').is(':visible') )
{
 $("#know1").hide();
		$("#whitebak").hide();
		$("#oval1").hide();
$("#oval2").hide();
$("#oval3").hide();
$("#txt0").hide();
$("#txt1").hide();
	  }	
else if($('#know2').is(':visible') )
{
 $("#know2").hide();
		$("#whitebak").hide();
		$("#oval1").hide();
$("#oval2").hide();
$("#oval3").hide();
$("#txt2").hide();
	  }
else if($('#know3').is(':visible') )
{
    $("#know3").hide();
		$("#whitebak").hide();
		$("#oval1").hide();
$("#oval2").hide();
$("#oval3").hide();
$("#txt3").hide();
	  }
else
{
	$("#know1").show();
	$("#txt0").show();
$("#txt1").show();
$("#oval1").show();
$("#oval2").show();
$("#oval3").show();
$("#whitebak").show();
$("#txt2").hide();
$("#txt3").hide();
$("#oval1").css("background", "rgb(138,138,138)");
$("#oval1").css("box-shadow", "0px 0px");
$("#oval2").css("background", "red");
$("#oval3").css("background", "red");
$("#oval2").css("box-shadow", "5px 0px");
$("#oval3").css("box-shadow", "5px 0px");
}
}
/*$("#didbak").click(function () 
{
 $(this).toggleClass("green");
});*/
$('#section2').click(function(e) 
{ 
if(($('#know1').is(':visible')) || ($('#know2').is(':visible') ) || ($('#know3').is(':visible') ) )
{
if( (!$(e.target).is('#know1')) &&  (!$(e.target).is('#know2')) &&  (!$(e.target).is('#know3')) && (!$(e.target).is('#didbak')) && (!$(e.target).hasClass('dot')) )
{
	$("#know1").hide();
	$("#txt0").hide();
$("#txt1").hide();
   $("#txt2").hide();
$("#txt3").hide();
$("#know2").hide();
$("#know3").hide(); 
$("#whitebak").hide();
}
}
});
function fadeshow1()
{
	$("#know1").show();
	$("#txt0").show();
$("#txt1").show();
$("#whitebak").show();
$("#oval1").show();
$("#oval2").show();
$("#oval3").show();
$("#txt2").hide();
$("#txt3").hide();
$("#know2").hide();
$("#know3").hide();
$("#oval1").css("background", "rgb(138,138,138)");
$("#oval2").css("background", "red");
$("#oval3").css("background", "red");
$("#oval2").css("box-shadow", "5px 0px");
$("#oval1").css("box-shadow", "0px 0px");
$("#oval3").css("box-shadow", "5px 0px");
}
function fadeshow2()
{
$("#know1").hide();
$("#know2").show();
$("#know3").hide();
$("#whitebak").show();
$("#txt0").hide();
$("#txt1").hide();
$("#txt2").show();
$("#txt3").hide();
$("#oval1").show();
$("#oval2").show();
$("#oval3").show();
$("#oval2").css("background", "rgb(138,138,138)");
$("#oval1").css("background", "red");
$("#oval3").css("background", "red");
$("#oval2").css("box-shadow", "0px 0px");
$("#oval1").css("box-shadow", "5px 0px");
$("#oval3").css("box-shadow", "5px 0px");
}
function fadeshow3()
{
$("#know1").hide();
$("#know2").hide();
$("#whitebak").show();
$("#know3").show();
$("#txt0").hide();
$("#txt1").hide();
$("#txt2").hide();
$("#txt3").show();
$("#oval1").show();
$("#oval2").show();
$("#oval3").show();
$("#oval3").css("background", "rgb(138,138,138)");
$("#oval2").css("background", "red");
$("#oval1").css("background", "red");
$("#oval2").css("box-shadow", "5px 0px");
$("#oval1").css("box-shadow", "5px 0px");
$("#oval3").css("box-shadow", "0px 0px");
}
        $(document).ready(function() {
			localStorage.slideIndex = 1;
    $("#GOD").click(saveSettings);
    loadSettings();
});

function loadSettings() {
   // $('#people').val(localStorage.people);
    //$('#watt').val(localStorage.watt);
    //$('#dateOfBirth').val(localStorage.dateOfBirth);
   // $('input[value="' + localStorage.emisnfactor + '"]').prop('checked', true);
    $("#sportive").val(localStorage.emissionfactor);
	$("#nameinput").val(localStorage.name)
}

function saveSettings() {
   // localStorage.people = $('#people').val();
    //localStorage.watt = $('#watt').val();
    //localStorage.dateOfBirth = $('#dateOfBirth').val();
    localStorage.emissionfactor = $("#sportive").val();
   // localStorage.conctn = $('input[type=radio]:checked').val();
   localStorage.name=$("#nameinput").val();
	var plsdei=0.001;
	localStorage.trav0=plsdei;
	localStorage.trav1=plsdei;
localStorage.trav2=plsdei;
localStorage.trav3=plsdei;
localStorage.trav4=plsdei;
localStorage.trav5=plsdei;
localStorage.trav6=plsdei;
localStorage.trav=plsdei;
localStorage.home=0;
localStorage.wastecal=0;
localStorage.removeItem("amountfuel");
localStorage.removeItem("auto");
localStorage.removeItem("bus");	
localStorage.removeItem("conctn");			
localStorage.removeItem("people");				
localStorage.removeItem("smalcng");		
localStorage.removeItem("smaldie");		
localStorage.removeItem("smalpet");	
localStorage.removeItem("taxi");		
localStorage.removeItem("train");		
localStorage.removeItem("waste");		
localStorage.removeItem("watt");
localStorage.removeItem("medcng");		
localStorage.removeItem("meddie");		
localStorage.removeItem("medpet");
localStorage.removeItem("largecng");		
localStorage.removeItem("largedie");		
localStorage.removeItem("largepet");
localStorage.removeItem("twowheel");
localStorage.removeItem("intair");
localStorage.removeItem("domair");
}
