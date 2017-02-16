function notebooks()
  {
    var clear = document.getElementById("proizvodi");
    clear.innerHTML = "";
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/notebook.JPG");
    x.setAttribute("width", "260px");
    x.setAttribute("height", "260px");
    x.setAttribute("alt", "The Pulpit Rock");
    document.getElementById("proizvodi").appendChild(x);
    var para = document.createElement("P");
    var t = document.createTextNode("Notebook vrh vrhova !!!");
    para.appendChild(t);
    document.getElementById("proizvodi").appendChild(para);
  }
  function laptops()
  {
    var clear = document.getElementById("proizvodi");
    clear.innerHTML = "";
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/asus1.png");
    x.setAttribute("width", "260px");
    x.setAttribute("height", "260px");
    x.setAttribute("alt", "The Pulpit Rock");
    document.getElementById("proizvodi").appendChild(x);
    var para = document.createElement("P");
    var t = document.createTextNode("Laptop nema boolji. !!!");
    para.appendChild(t);
    document.getElementById("proizvodi").appendChild(para);
  }
  function ultrabooks()
  {
    var clear = document.getElementById("proizvodi");
    clear.innerHTML = "";
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/ultra.png");
    x.setAttribute("width", "260px");
    x.setAttribute("height", "260px");
    x.setAttribute("alt", "The Pulpit Rock");
    document.getElementById("proizvodi").appendChild(x);
    var para = document.createElement("P");
    var t = document.createTextNode("Ultrabook za sve igrice .");
    para.appendChild(t);
    document.getElementById("proizvodi").appendChild(para);
  }