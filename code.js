
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
		var sheet = document.createElement('link');
		sheet.setAttribute('href', 'style/main.css');
		sheet.setAttribute('rel', "stylesheet");
		sheet.setAttribute('type', "text/css");
		document.body.append(sheet)

		document.body.classList.add("home");

    	// Add header
    	var header = document.getElementsByTagName('header')[0];
    	var heading = document.createElement("h1");
    	var headingText = document.createTextNode("Game of Thrones");
    	heading.appendChild(headingText);
    	header.appendChild(heading);


    
    	//Add Article
    	var article = document.getElementsByTagName('article')[0];
    	var articleTitle = document.createElement('h2');
    	articleTitle.textContent = "Info";
    	article.appendChild(articleTitle);
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

    var header = document.getElementsByTagName('header')[0];

    //Add the selector for the elements to the header
    	var selector1 = document.createElement("SELECT");
    	selector1.setAttribute("id", "mySelect1");
    	header.appendChild(selector1);
    
    	temp = document.getElementsByClassName("moddable");
    	var semElements = [temp.length];
    	console.log(temp);
    	console.log(semElements);
    	for(i=0; i < temp.length; i++)
        	semElements[i] = temp[i].localName;

   		for(i=0; i < semElements.length; i++)
    	{
        	var z = document.createElement("option");
        	z.setAttribute("value", semElements[i]);
        	var t = document.createTextNode(semElements[i]);
        	z.appendChild(t);
        	selector1.appendChild(z);
    	}

    	//Add the selector for the styles to the header
    	var selector2 = document.createElement("SELECT");
    	selector2.setAttribute("id", "mySelect");
    	header.appendChild(selector2);
    
    	var styleElements = ["Dark", "Blue", "Light", "Craycray"];
    	for(i=0; i < semElements.length; i++)
    	{
        	var z = document.createElement("option");
        	z.setAttribute("value", styleElements[i]);
        	var t = document.createTextNode(styleElements[i]);
        	z.appendChild(t);
        	selector2.appendChild(z);
    	}


}