
var timeOutStoper;


function stopwatch(uchwytStopera, liczba){
	uchwytStopera.innerHTML= liczba--;
	if (liczba <0){
		return;
	}
	timeOutStoper = setTimeout(function(){
		stopwatch(uchwytStopera, liczba	);	
	},500);
}

function Stopwatch(uchwytStopera){
	this.uchwytStopera = uchwytStopera;
	this.poczatkowaWartosc;
	this.timeOutRef = undefined;
	this.odpal = function(poczatkowaWartosc){
		this.poczatkowaWartosc = poczatkowaWartosc;
		if (this.timeOutRef) {
			this.zatrzymaj();
		}
		this.startStoper();
	};
	this.startStoper = function(){
		if (this.poczatkowaWartosc < 0){
			return;
		}
		this.uchwytStopera.innerHTML = this.poczatkowaWartosc--;
		
		var self = this;
		this.timeOutRef = setTimeout(function(){
			self.startStoper();
		},500)		;
	};
	this.zatrzymaj = function(){
		clearTimeout(this.timeOutRef);
	}
	this.kontynuuj = function(){
		this.startStoper();
	};
}


window.onload = function()
{
    var przyciskOdpalStoper = document.getElementById("przyciskOdpalStoper");
    var przyciskZatrzymajStoper = document.getElementById("przyciskZatrzymajStoper");
    var przyciskKontynuujStoper = document.getElementById("przyciskKontynuujStoper");
    
    
    var uchwytStopera = document.getElementById("uchwytStopera");
    
    var stoper = new Stopwatch(uchwytStopera);
    
    przyciskOdpalStoper.onclick = function()
    {
        var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value; 
        stoper.odpal(poczatkowaWartosc);
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        stoper.zatrzymaj();
    };
    przyciskKontynuujStoper.onclick = function()
    {
        stoper.kontynuuj();
    };
    
    /*
    przyciskOdpalStoper.onclick = function()
    {
       var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;        
       uchwytStopera.innerHTML = poczatkowaWartosc;
       
       if (timeOutStoper)
           clearTimeout(timeOutStoper);
       
       stopwatch(uchwytStopera, poczatkowaWartosc);
 
       
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        clearTimeout(timeOutStoper);
    };
    */
    
};