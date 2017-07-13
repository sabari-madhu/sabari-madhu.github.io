
var avg=2000;
var m=localStorage.name;
$("#namech").text(m);
var home11=parseInt(localStorage.home);
var wastecal11=parseInt(localStorage.wastecal);
var trav=parseInt((localStorage.trav))+parseInt((localStorage.trav0))+parseInt((localStorage.trav1))+parseInt((localStorage.trav2))+parseInt((localStorage.trav3))+parseInt((localStorage.trav4))+parseInt((localStorage.trav5))+parseInt((localStorage.trav6));
var trav11=trav;
var totall=(home11)+(wastecal11)+(trav11);
$("#finalres").text(totall);
var total11=parseInt(totall);

	