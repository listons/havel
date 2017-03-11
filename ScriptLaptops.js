var laptops = []; //Deklaracija niza proizvoda

function prikazi(n){ //Prikazuje proizvode
        document.getElementById(n).style.display = 'block';
}
function sakri(n){ //Sakriva proizvode
        document.getElementById(n).style.display = 'none';
}
function sort(value) {
    if (value == '2') { //Sortira po opadajucem redosledu
	var c = 0;
    var pom;
    var sve1,sve2;
	var num = document.getElementById('glavni').childNodes;
	for (var i = 1; i < num.length; i+=2) { //Puni niz proizvoda
		for (var j = c; j <i-c; j++) {
			laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
		}	
		c++;
	}
    /*for(var m = 0; m<laptops.length; m++)
    {
    sve1+= laptops[m].ime;
    }
    alert(sve1);*/
	for(var i = 0; i<laptops.length; i++) //Sortiranje
    {
        for(var j=0; j<laptops.length-1; j++)
        {
            if(laptops[j].cena < laptops[j+1].cena)
            {
                pom = laptops[j];
                laptops[j] = laptops[j+1];
                laptops[j+1] = pom;
            }
        }
    }
	/*for(var m = 0; m<laptops.length; m++)
	{
	sve2+=laptops[m].ime;
	}
    alert(sve2);*/
    c=0;
     for (var i = 1; i < num.length; i+=2) { //Ispis
        for (var j = c; j <i-c; j++) {
            num[i].childNodes[1].innerHTML = laptops[j].slika;
            num[i].childNodes[3].innerHTML = laptops[j].ime;
            num[i].childNodes[5].innerHTML = laptops[j].cena;   
        }   
        c++;
    }
}
else if (value == '1') { //Sortira po rastucem redosledu
    var c = 0;
    var pom;
    var sve1,sve2;
    var num = document.getElementById('glavni').childNodes;
    for (var i = 1; i < num.length; i+=2) {
        for (var j = c; j <i-c; j++) {
            laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
        }   
        c++;
    }
    /*for(var m = 0; m<laptops.length; m++)
    {
    sve1+= laptops[m].cena;
    }
    alert(sve1);*/
    for(var i = 0; i<laptops.length; i++)//Sortiranje
    {
        for(var j=0; j<laptops.length-1; j++)
        {
            if(laptops[j].cena > laptops[j+1].cena)
            {
                pom = laptops[j];
                laptops[j] = laptops[j+1];
                laptops[j+1] = pom;
            }
        }
    }
    /*for(var m = 0; m<laptops.length; m++)
    {
    sve2+=laptops[m].cena;
    }
    alert(sve2);*/
    c=0;
     for (var i = 1; i < num.length; i+=2) {//Ispis
        for (var j = c; j <i-c; j++) {
            num[i].childNodes[1].innerHTML = laptops[j].slika;
            num[i].childNodes[3].innerHTML = laptops[j].ime;
            num[i].childNodes[5].innerHTML = laptops[j].cena;
        }   
        c++;
    }
}
}



