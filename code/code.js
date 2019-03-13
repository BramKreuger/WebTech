
/// FIRST PART ADDING BASIC HTML/STYLE

// run this function when the document is loaded
window.onload = function() 
{
	//dynamically create the elements and content for info.html page
    if (document.body.className == 'info')
    {
    	 function createModdableElement(name)
    	{
    	    	e = document.createElement(name);
        		e.setAttribute('class', 'moddable');
        		return e;
    	}

		//Add styleSheet
        var head = document.head;
		var sheet = document.createElement('link');
		sheet.setAttribute('href', 'style/main.css');
		sheet.setAttribute('rel', "stylesheet");
		sheet.setAttribute('type', "text/css");
		document.head.append(sheet)

		document.body.classList.add("home");

    	// Add header
    	var header = document.getElementsByTagName('header')[0];
    	var heading = document.createElement("h1");
    	var headingText = document.createTextNode("Game of Thrones");
    	heading.appendChild(headingText);
    	header.appendChild(heading);

    	//Add Article and sections
    	var article = document.getElementsByTagName('article')[0];
    	var articleTitle = document.createElement('h2');
    	articleTitle.textContent = "Info";
    	article.appendChild(articleTitle);
    	article.setAttribute('class', 'text');
    	var articlePar = document.createElement("p");
    	for(i=0; i<50; i++)
    	{
        	var articleText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a mi vitae velit ullamcorper posuere. Maecenas blandit felis a neque rutrum ")
        	article.appendChild(articleText);
    	}

    	var section = createModdableElement('section');
    	var sectionP1 = document.createElement('p');
    	var sectionP1Text = document.createTextNode("This is a new section!");
    	section.appendChild(sectionP1);
    	sectionP1.appendChild(sectionP1Text);
    	article.appendChild(section);

    	//Add footer
    	var footer =  document.getElementsByTagName('footer')[0];
    	var footerImg = document.createElement('img');
    	var footerText = document.createTextNode("Created by: Daniël Bezema, Bram Kreuger en Nikki Evers. \n University Utrecht \n Webtechnology \n INFOB2WT ");
    	footerImg.setAttribute('src', "style/images/utrecht_university_english_logo_transparent.png");
    	footerImg.setAttribute('alt', 'Image of Utrecht university logo');
    	footer.appendChild(footerText);
    	footer.appendChild(footerImg);

    	/// ADDING CLASSES
    	class Book
    	{
        	constructor(author, genre, publisher, language, numberOfPages, productSize, isbn, edition)
        	{
            	this.author = author;
            	this.genre = genre;
            	this.language = language;
            	this.numberOfPages = numberOfPages;
            	this.productSize = productSize;
            	this.isbn = isbn
            	this.edition = edition;
        	}
    	}
    	class Author
    	{
        	constructor(name, dateOfBirth, placeOfBirth, nationality)
        	{
            	this.name = name;
            	this.dateOfBirth = dateOfBirth;
            	this.placeOfBirth = placeOfBirth;
            	this.nationality = nationality;
        	}
		}


	} 

	//dynamically add the navigation bar for all pages
    var nav = document.getElementsByTagName('nav')[0];
    var links = ["Home", "Plot", "Characters", "World", "Author", "Info"];
    for(i=0; i < links.length; i++) 
    {
        var navLink = document.createElement("a");
        var navLinkText = document.createTextNode(links[i]);
        navLink.setAttribute('href', links[i].charAt(0).toLowerCase() + links[i].slice(1) + ".html");
        navLink.append(navLinkText);
        nav.appendChild(navLink);

        //Highlight current page in nav-bar
        var current = window.location.href;
        if (navLink.href == current)
        {
            navLink.className = 'current';
        }
    }
    
    // Get necessary elements for a menu
    var header = document.getElementsByTagName('header')[0];
    var menu = document.createElement('div');
    var label = document.createElement('label');
    var labelText = document.createTextNode('Modify appearance for this site:');


    menu.setAttribute('id','menu');
    label.setAttribute('for', 'menu');
    header.appendChild(menu);
    menu.appendChild(labelText);

	

    // add select for modifiable elements 
    var selector1 = document.createElement('select');
    var optgroup1 = document.createElement('optgroup');
    optgroup1.setAttribute('label', 'Element')
    menu.append(selector1);
    selector1.appendChild(optgroup1);
    selector1.onchange = function() {changeSelector1()};
    
    // find all existing modifiable elements on current page    	
    var semElements = document.querySelectorAll('body,nav,header,footer,aside,article,section');

    for(i=0; i < semElements.length; i++)
    {
        var z = document.createElement("option");
        z.setAttribute("value", i);
        var t = document.createTextNode(semElements[i].localName);
        z.appendChild(t);
        selector1.appendChild(z);            
    }  

    // add select for fontsize
    var selector2 = document.createElement('select');
    var optgroup2 = document.createElement('optgroup');

    optgroup2.setAttribute('label', 'Fontsize')
    menu.appendChild(selector2);
    selector2.appendChild(optgroup2);
    selector2.onchange = function() {changeSelector2()};

    var selectedFontSize = 30;
    var fontList = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
    for (i=0; i< fontList.length;i++) 
    {
        var o = document.createElement('option');
        o.setAttribute("value", fontList[i]);
        var t = document.createTextNode(fontList[i]);
        o.appendChild(t);
        optgroup2.appendChild(o);

    }

    // add select for color
    var selector3 = document.createElement('select');
    var optgroup3 = document.createElement('optgroup');

    optgroup3.setAttribute('label', 'Color')
    menu.appendChild(selector3);
    selector3.appendChild(optgroup3);
    selector3.onchange = function() {changeSelector3()};

    var selectedColor;
    var colorList = ['blue','red','green','white'];
    for (i=0; i< colorList.length;i++) 
    {
        var o = document.createElement('option');
        o.setAttribute("value", colorList[i]);
        var t = document.createTextNode(colorList[i]);
        o.appendChild(t);
        optgroup3.appendChild(o);

    }
    // add select for background
    var selector4 = document.createElement('select');
    var optgroup4 = document.createElement('optgroup');

    optgroup4.setAttribute('label', 'Backcolor')
    menu.appendChild(selector4);
    selector4.appendChild(optgroup4);
    selector4.onchange = function() {changeSelector4()};

    var selectedBackColor;
    var backgroundList = ['blue','red','green','black'];
    for (i=0; i< backgroundList.length;i++) 
    {
        var o = document.createElement('option');
        o.setAttribute("value", backgroundList[i]);
        var t = document.createTextNode(backgroundList[i]);
        o.appendChild(t);
        optgroup4.appendChild(o);

    }

    var styleButton = document.createElement("button");
    styleButton.textContent = "Change style";
    styleButton.setAttribute("id", "selectorButton");
    styleButton.onclick = function() {styleChange()};
    menu.appendChild(styleButton);

    var selectedElementID = 0;
    function changeSelector1()
    {
        selectedElementID = selector1.value;
    }

    var selectedFontSize = "medium";
    function changeSelector2()
    {
        selectedFontSize = selector2.value;
    }
    var selectedColor = "blue";
    function changeSelector3()
    {
        selectedColor = selector3.value;
    }

    var selectedBackColor = "blue";
    function changeSelector4()
    {
        selectedBackColor = selector4.value;
    }

    function styleChange()
    {       
        e = semElements[selectedElementID];          
        e.style.color = selectedColor;
        e.style.backgroundColor = selectedBackColor;
        e.style.fontSize = selectedFontSize;
        
        childeren = semElements[selectedElementID].children
        for(i=0; i < childeren.length; i++)
        {
            childeren[i].style.color = selectedColor;
            childeren[i].style.fontSize = selectedFontSize;
            childeren[i].style.backgroundColor = selectedBackColor;
        }   

        if(e.tagName == "BODY")
        {
            e.classList.remove(e.className);
        }        
    }

    var reloadButton = document.createElement("button");
    reloadButton.setAttribute("id", "selectorButton");
    reloadButton.textContent = "Reset";
    reloadButton.onclick = function() {location.reload()};
    menu.appendChild(reloadButton);

}