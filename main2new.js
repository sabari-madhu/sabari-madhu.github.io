var avg=9071.85;
var m=localStorage.name;
$("#namech").text(m);
var home11=parseInt(localStorage.home);
var wastecal11=parseInt(localStorage.wastecal);
var trav1=parseInt((localStorage.trav0))+parseInt((localStorage.trav1))+parseInt((localStorage.trav2))+parseInt((localStorage.trav3))+parseInt((localStorage.trav4))+parseInt((localStorage.trav5))+parseInt((localStorage.trav6));
var trav11=trav1;
var totall=(home11)+(wastecal11)+(trav11);
$("#finalres").text(totall);
var total11=parseInt(totall);
/*function endclr()
{
localStorage.amountfuel=0;
localStorage.auto=0;
localStorage.bus=0;	
localStorage.conctn=0;		
localStorage.home=0;		
localStorage.people=0;		
localStorage.slideIndex=0;		
localStorage.smalcng=0;		
localStorage.smaldie=0;		
localStorage.smalpet=0;	
localStorage.taxi=0;		
localStorage.train=0;	
localStorage.trav=0;		
localStorage.trav0=0;		
localStorage.trav1=0;		
localStorage.trav2=0;		
localStorage.trav3=0;		
localStorage.trav4=0;		
localStorage.trav5=0;		
localStorage.trav6=0;		
localStorage.waste=0;	
localStorage.wastecal=0;		
localStorage.watt=0;
}	*/
