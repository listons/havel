var laptops = [];

function prikazi(n){
        document.getElementById(n).style.display = 'block';
}
function sakri(n){
        document.getElementById(n).style.display = 'none';
}
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}
function sortOpadajuce() {
	var c = 0;
	var num = document.getElementById('glavni').childNodes;
	for (var i = 1; i < num.length; i+=2) {
		for (var j = c; j <i-c; j++) {
			laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
		}	
		c++;
	}
	laptops.sortBy('cena');
	for(var m = 0; m<laptops.length; m++)
	{
	alert(laptops[m].cena);
	}
}

function sortRastuce() {
	var c = 0;
	var num = document.getElementById('glavni').childNodes;
	for (var i = 1; i < num.length; i+=2) {
		for (var j = c; j <i-c; j++) {
			laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
		}	
		c++;
	}
	
	for(var m = 0; m<laptops.length; m++)
	{
	alert(laptops[m].cena);
	}
}


