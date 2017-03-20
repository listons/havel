var laptops = []; //Deklaracija niza proizvoda

function prikazi(n){ //Prikazuje proizvode
        document.getElementById(n).style.display = 'block';
}
function sakri(n){ //Sakriva proizvode
        document.getElementById(n).style.display = 'none';
}
function staraBoja(){ //Svima stara boja
        
        document.getElementById("dug1").style.backgroundColor = "#999999";
        document.getElementById("dug2").style.backgroundColor = "#999999";
        document.getElementById("dug3").style.backgroundColor = "#999999";
        document.getElementById("dug4").style.backgroundColor = "#999999";

}
function staraBojaNavi(){ //Svima stara boja
        
        document.getElementById("navigacijaultra").style.backgroundColor = "white";
        document.getElementById("navigacijaNote").style.backgroundColor = "white";
        document.getElementById("navigacijaLap").style.backgroundColor = "white";
}
function boja(n){ //Menja boju
    staraBoja();
    document.getElementById(n).style.backgroundColor = "#3D3D3D";
}
/*function ultrabook(n){ //Prikazuje samo ultrabook
    staraBojaNavi();
    document.getElementById(n).style.backgroundColor = "#3D3D3D";
    var c = 0;
    var pom;
    var nov = [];
    var num = document.getElementById('glavni').childNodes;
    for (var i = 1; i < num.length; i+=2) { //Puni niz proizvoda
        for (var j = c; j <i-c; j++) {
            laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
        }   
        c++;
    }
        for(var k= 0; k<laptops.length; k+=10)
        {
            nov[k] = laptops[k+2];
            nov[k+1] = laptops[k+3];
            nov[k+2] = laptops[k+8];
            nov[k+3] = laptops[k+9];
        }
        for(var k= 0; k<laptops.length; k+=10)
        {
            pom+= nov[k].ime + nov[k+1].ime + nov[k+2].ime + nov[k+3].ime;
        }
        alert(pom);
        c=0;
     for (var j = 0; j <laptops.length; j+=10){//Ispis
         for (var i = 1; i < num.length; i+=8) {
            num[i].childNodes[1].innerHTML = laptops[j].slika;
            num[i].childNodes[3].innerHTML = laptops[j].ime;
            num[i].childNodes[5].innerHTML = laptops[j].cena;
            num[i+2].childNodes[1].innerHTML = laptops[j+1].slika;
            num[i+2].childNodes[3].innerHTML = laptops[j+1].ime;
            num[i+2].childNodes[5].innerHTML = laptops[j+1].cena;
            num[i+4].childNodes[1].innerHTML = laptops[j+2].slika;
            num[i+4].childNodes[3].innerHTML = laptops[j+2].ime;
            num[i+4].childNodes[5].innerHTML = laptops[j+2].cena;
            num[i+6].childNodes[1].innerHTML = laptops[j+3].slika;
            num[i+6].childNodes[3].innerHTML = laptops[j+3].ime;
            num[i+6].childNodes[5].innerHTML = laptops[j+3].cena;
        }   
        c++;
    }
}
function notebook(n){ //Prikazuje samo notebook
    staraBojaNavi();
    document.getElementById(n).style.backgroundColor = "#3D3D3D";
    var c = 0;
    var pom;
    var nov = [];
    var num = document.getElementById('glavni').childNodes;
    for (var i = 1; i < num.length; i+=2) { //Puni niz proizvoda
        for (var j = c; j <i-c; j++) {
            laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
        }   
        c++;
    }
        for(var k= 0; k<laptops.length; k+=10)
        {
            nov[k] = laptops[k+4];
            nov[k+1] = laptops[k+6];
            nov[k+2] = laptops[k+7];
        }
        for(var k= 0; k<laptops.length; k+=10)
        {
            pom+= nov[k].ime + nov[k+1].ime + nov[k+2].ime;
        }
        alert(pom);
}
function laptop(n){ //Prikazuje samo laptopove
    staraBojaNavi();
    document.getElementById(n).style.backgroundColor = "#3D3D3D";
    var c = 0;
    var pom;
    var nov = [];
    var num = document.getElementById('glavni').childNodes;
    for (var i = 1; i < num.length; i+=2) { //Puni niz proizvoda
        for (var j = c; j <i-c; j++) {
            laptops[j] = { slika:num[i].childNodes[1].innerHTML, ime:num[i].childNodes[3].innerHTML, cena:num[i].childNodes[5].innerHTML};
        }   
        c++;
    }
        for(var k= 0; k<laptops.length; k+=10)
        {
            nov[k] = laptops[k];
            nov[k+1] = laptops[k+1];
            nov[k+2] = laptops[k+5];
        }
        for(var k= 0; k<laptops.length; k+=10)
        {
            pom+= nov[k].ime + nov[k+1].ime + nov[k+2].ime;
        }
        alert(pom);
}*/
function sakriSve(){
    document.getElementById("1").style.display = 'none';
    document.getElementById("2").style.display = 'none';
    document.getElementById("3").style.display = 'none';
    document.getElementById("4").style.display = 'none';
    document.getElementById("5").style.display = 'none';
    document.getElementById("6").style.display = 'none';
    document.getElementById("7").style.display = 'none';
    document.getElementById("8").style.display = 'none';
    document.getElementById("9").style.display = 'none';
    document.getElementById("10").style.display = 'none';
    document.getElementById("11").style.display = 'none';
    document.getElementById("12").style.display = 'none';
    document.getElementById("13").style.display = 'none';
    document.getElementById("14").style.display = 'none';
    document.getElementById("15").style.display = 'none';
    document.getElementById("16").style.display = 'none';
    document.getElementById("17").style.display = 'none';
    document.getElementById("18").style.display = 'none';
    document.getElementById("19").style.display = 'none';
    document.getElementById("20").style.display = 'none';
    document.getElementById("21").style.display = 'none';
    document.getElementById("22").style.display = 'none';
    document.getElementById("23").style.display = 'none';
    document.getElementById("24").style.display = 'none';
    document.getElementById("25").style.display = 'none';
    document.getElementById("26").style.display = 'none';
    document.getElementById("27").style.display = 'none';
    document.getElementById("28").style.display = 'none';
    document.getElementById("29").style.display = 'none';
    document.getElementById("30").style.display = 'none';
    document.getElementById("31").style.display = 'none';
    document.getElementById("32").style.display = 'none';
    document.getElementById("33").style.display = 'none';
    document.getElementById("34").style.display = 'none';
    document.getElementById("35").style.display = 'none';
    document.getElementById("36").style.display = 'none';
    document.getElementById("37").style.display = 'none';
    document.getElementById("38").style.display = 'none';
    document.getElementById("39").style.display = 'none';
    document.getElementById("40").style.display = 'none';
    document.getElementById("41").style.display = 'none';
    document.getElementById("42").style.display = 'none';
    document.getElementById("43").style.display = 'none';
    document.getElementById("44").style.display = 'none';
    document.getElementById("45").style.display = 'none';
    document.getElementById("46").style.display = 'none';
    document.getElementById("47").style.display = 'none';
    document.getElementById("48").style.display = 'none';
    document.getElementById("49").style.display = 'none';
    document.getElementById("50").style.display = 'none';

}
function prikaziPrvuStranu(){ //Prikazuje proizvode sa prve stranice
        sakriSve();
        document.getElementById("1").style.display = 'block';
        document.getElementById("2").style.display = 'block';
        document.getElementById("3").style.display = 'block';
        document.getElementById("4").style.display = 'block';
        document.getElementById("5").style.display = 'block';
        document.getElementById("6").style.display = 'block';
        document.getElementById("7").style.display = 'block';
        document.getElementById("8").style.display = 'block';
        document.getElementById("9").style.display = 'block';
        document.getElementById("10").style.display = 'block';

        
}
function prikaziDruguStranu(){ //Prikazuje proizvode sa druge stranice
    sakriSve();
        document.getElementById("11").style.display = 'block';
        document.getElementById("12").style.display = 'block';
        document.getElementById("13").style.display = 'block';
        document.getElementById("14").style.display = 'block';
        document.getElementById("15").style.display = 'block';
        document.getElementById("16").style.display = 'block';
        document.getElementById("17").style.display = 'block';
        document.getElementById("18").style.display = 'block';
        document.getElementById("19").style.display = 'block';
        document.getElementById("20").style.display = 'block';
}
function prikaziTrecuStranu(){ //Prikazuje proizvode sa trece stranice
    sakriSve();
        document.getElementById("21").style.display = 'block';
        document.getElementById("22").style.display = 'block';
        document.getElementById("23").style.display = 'block';
        document.getElementById("24").style.display = 'block';
        document.getElementById("25").style.display = 'block';
        document.getElementById("26").style.display = 'block';
        document.getElementById("27").style.display = 'block';
        document.getElementById("28").style.display = 'block';
        document.getElementById("29").style.display = 'block';
        document.getElementById("30").style.display = 'block';
}
function prikaziCetvrtuStranu(){ //Prikazuje proizvode sa cetvrte stranice
    sakriSve();
        document.getElementById("41").style.display = 'block';
        document.getElementById("42").style.display = 'block';
        document.getElementById("43").style.display = 'block';
        document.getElementById("44").style.display = 'block';
        document.getElementById("45").style.display = 'block';
        document.getElementById("46").style.display = 'block';
        document.getElementById("47").style.display = 'block';
        document.getElementById("48").style.display = 'block';
        document.getElementById("49").style.display = 'block';
        document.getElementById("50").style.display = 'block';
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
else if (value == '3') { //Sortira po brendu
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
            if(laptops[j].ime > laptops[j+1].ime)
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