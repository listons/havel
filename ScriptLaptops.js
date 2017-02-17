function notebooks()
  {
    var clear = document.getElementById("proizvodi");
    clear.innerHTML = "";
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/notebook.JPG");
    x.setAttribute("class", "izgled");
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
    x.setAttribute("class", "izgled");
    x.setAttribute("alt", "Laptop Asus");
    document.getElementById("proizvodi").appendChild(x);
    var x1 = document.createElement("IMG");
    x1.setAttribute("src", "images/acer.jpg");
    x1.setAttribute("class", "izgled");
    x.setAttribute("alt", "Laptop Acer");
    document.getElementById("proizvodi").appendChild(x1);
    var x2 = document.createElement("IMG");
    x2.setAttribute("src", "images/asus2.jpg");
    x2.setAttribute("class", "izgled");
    x.setAttribute("alt", "Laptop Asus Drugi");
    document.getElementById("proizvodi").appendChild(x2);
    var x3 = document.createElement("IMG");
    x3.setAttribute("src", "images/lenovo.png");
    x3.setAttribute("class", "izgled");
    x.setAttribute("alt", "Laptop Lenovo");
    document.getElementById("proizvodi").appendChild(x3);
    var x4 = document.createElement("IMG");
    x4.setAttribute("src", "images/dell.jpg");
    x4.setAttribute("class", "izgled");
    x.setAttribute("alt", "Laptop Dell");
    document.getElementById("proizvodi").appendChild(x4);
  }
  function ultrabooks()
  {
    var clear = document.getElementById("proizvodi");
    clear.innerHTML = "";
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/ultra.png");
    x.setAttribute("class", "izgled");
    document.getElementById("proizvodi").appendChild(x);
    var para = document.createElement("P");
    var t = document.createTextNode("Ultrabook za sve igrice .");
    para.appendChild(t);
    document.getElementById("proizvodi").appendChild(para);
  }