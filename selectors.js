//function Selectors()
//{
    var header = document.getElementsByTagName('header')[0];
    //Add the selector for the elements to the header
    var selector1 = document.createElement("SELECT");
    selector1.setAttribute("id", "mySelect1");
    selector1.onchange = function() {changeSelector1()};
    header.appendChild(selector1);

    var semElements = document.querySelectorAll('body,header,footer,aside,article,section');

    for(i=0; i < semElements.length; i++)
    {
        var z = document.createElement("option");
        z.setAttribute("value", i);
        var t = document.createTextNode(semElements[i].localName);
        z.appendChild(t);
        selector1.appendChild(z);            
    }       

    var selectedElementID = 0;
    function changeSelector1() {
        selectedElementID = document.getElementById("mySelect1").value;
        }

    //Add the selector for the styles to the header
    var selector2 = document.createElement("SELECT");
    selector2.setAttribute("id", "mySelect2");
    selector2.onchange = function() {changeSelector2()}
    header.appendChild(selector2);

    var styleElements = ["Black", "Purple", "Blue", "Yellow", "Green"];
    for(i=0; i < styleElements.length; i++)
    {
        var z = document.createElement("option");
        z.setAttribute("value", styleElements[i]);
        var t = document.createTextNode(styleElements[i]);
        z.appendChild(t);
        selector2.appendChild(z);
    }

    var selectedStyle = styleElements[0];
    function changeSelector2()
    {
        selectedStyle = document.getElementById("mySelect2").value;
    }

    var styleButton = document.createElement("button");
    styleButton.textContent = "Change style";
    styleButton.onclick = function() {styleChange()};
    header.appendChild(styleButton);

    function styleChange()
    {
        semElements[selectedElementID].style.color = selectedStyle;
        childeren = semElements[selectedElementID].children
        for(i=0; i < childeren.length; i++)
        {
            childeren[i].style.color = selectedStyle;
        }            
    }
    
//}