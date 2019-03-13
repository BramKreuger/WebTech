
/// FIRST PART ADDING BASIC HTML/STYLE

// run this function when the document is loaded
window.onload = function() 
{
	//dynamically create the elements and content for info.html page
    if (document.body.className == 'info')
    {
        /// ADDING CLASSES
        class bookSeries
        {
            constructor(title, author, genre, publisher, language)
            {
                this.title = title;
                this.author = author;
                this.genre = genre;
                this.publisher = publisher;
                this.language = language;
            }
        }

        class book extends bookSeries
    	{
        	constructor(author, genre, publisher, language, title, numberOfPages, isbn, edition)
        	{
                super(author, genre, publisher, language);
                this.title = title;
                this.numberOfPages = numberOfPages;
            	this.isbn = isbn
            	this.edition = edition;
        	}
        };
        
    	class author
    	{
        	constructor(name, dateOfBirth, placeOfBirth, nationality)
        	{
            	this.name = name;
            	this.dateOfBirth = dateOfBirth;
            	this.placeOfBirth = placeOfBirth;
            	this.nationality = nationality;
            }
            
        }
        
        class publisher
        {
            constructor(name, location, since)
            {
                this.name = name;
                this.location = location;
                this.since = since;
            }

        }

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

        //create Book-object;
        var gotPublisher = new publisher("Bantam Books", "New York city, United States", "1945");
        var gotAuthor = new author("George R. R. Martin", "20th of september 1948", "Bayonne, New Jersey, United States", "American");
        var gotSeries = new bookSeries("A Song of Ice and Fire", gotAuthor.name, "fantasy", gotPublisher.name, "English");
        var gotBook = new book(gotAuthor.name, gotSeries.genre, gotSeries.publisher.name, gotSeries.language, "A Game of Thrones", "694", "0553103547", "1st" );

        //Add Article
        
    	var article = document.getElementsByTagName('article')[0];
    	var articleTitle = document.createElement('h2');
    	articleTitle.textContent = "Info";
        article.appendChild(articleTitle);        
    	article.setAttribute('class', 'text');
        var articleText = document.createTextNode("This is a website about the bookseries " + gotSeries.title + ". This series now has a total of five books; the first book that came out was " + gotBook.title + ".");
        article.appendChild(articleText);

        //Add Section
        var lijn = document.createElement('hr');
        article.appendChild(lijn);
        var section = createModdableElement('section');
        var sectionTitle = document.createElement('h3');
        sectionTitle.textContent = "Short Overview";
        section.appendChild(sectionTitle);

        //First paragraph
        var sectionP1 = document.createElement('p');
    	var sectionP1Text = document.createTextNode("A Game of Thrones takes place over the course of one year on or near the fictional continent of Westeros. The story begins when King Robert visits the northern castle Winterfell to ask Ned Stark to be his right-hand assistant, or Hand of the King. The previous Hand, Jon Arryn, died under suspicious circumstances. Robert comes with his queen, Cersei Lannister, and his retinue, which includes a number of Lannisters. Just after the royal party arrives, Ned’s wife, Catelyn, receives a message claiming that the Lannister family was responsible for the death of the former Hand. ");
        section.appendChild(sectionP1);
        sectionP1.appendChild(sectionP1Text);
        article.appendChild(section);

        //Add link to plot overview
        var plotLink = document.createElement('a');
        var plotLinkText= document.createTextNode('Want to read more?');    
        plotLink.setAttribute('href', 'plot.html');
        plotLink.appendChild(plotLinkText);
        sectionP1.appendChild(plotLink);
        
        var lijn1 = document.createElement('hr');
        sectionP1.appendChild(lijn1);

        //Second paragraph
        var sectionP2Title = document.createElement('h3');
        sectionP2Title.textContent = "The Author";
        var sectionP2 = document.createElement('p');
    	var sectionP2Text = document.createTextNode("The author of the bookseries " + gotSeries.title + " is " + gotAuthor); //". He was born in " + gotAuthor.placeOfBirth " in " + gotAuthor.dateOfBirth ".");
        section.appendChild(sectionP2Title);
        section.appendChild(sectionP2);
        sectionP2.appendChild(sectionP2Text);

        var lijn2 = document.createElement('hr');
        sectionP2.appendChild(lijn2);

        //Third paragraph
        var sectionP2Title = document.createElement('h3');
        sectionP2Title.textContent = "Book Details";
        var sectionP2 = document.createElement('p');
        var sectionP2Text = document.createTextNode("hoi");
        section.appendChild(sectionP2Title);
        section.appendChild(sectionP2);
        sectionP2.appendChild(sectionP2Text);

    	//Add footer
    	var footer =  document.getElementsByTagName('footer')[0];
    	var footerImg = document.createElement('img');
    	var footerText = document.createTextNode("Created by: Daniël Bezema, Bram Kreuger en Nikki Evers. \n University Utrecht \n Webtechnology \n INFOB2WT ");
    	footerImg.setAttribute('src', "style/images/utrecht_university_english_logo_transparent.png");
    	footerImg.setAttribute('alt', 'Image of Utrecht university logo');
    	footer.appendChild(footerText);
    	footer.appendChild(footerImg);

    	
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


    // create necessary elements for a menu
    var header = document.getElementsByTagName('header')[0];
    var menu = document.createElement('div');
    var label = document.createElement('label');
    var labelText = document.createTextNode('Modify appearance for this site:');


    menu.setAttribute('id','menu');
    label.setAttribute('for', 'menu');
    header.appendChild(menu);
    menu.appendChild(labelText);

	// find all existing modifiable elements on current page    	
    var allowedList = ['header','footer','body','article','section','aside'];
    var pageList = [];
    for (i = 0; i < allowedList.length; i++)
    {
        var elementList = document.getElementsByTagName(allowedList[i])[0];
    	if (elementList !== undefined)
        {
            pageList.push(allowedList[i]);

        }
    }

    // add select for modifiable elements 
    var selector1 = document.createElement('select');
    var optgroup1 = document.createElement('optgroup');

    optgroup1.setAttribute('label', 'Element')
    menu.append(selector1);
    selector1.appendChild(optgroup1);

    for (i=0; i< pageList.length;i++) 
    {
        var o = document.createElement('option');
        o.setAttribute("value", pageList[i]);
        var t = document.createTextNode(pageList[i]);
        o.appendChild(t);
        optgroup1.appendChild(o);

    }

    // add select for fontsize
    var selector2 = document.createElement('select');
    var optgroup2 = document.createElement('optgroup');

    optgroup2.setAttribute('label', 'Fontsize')
    menu.appendChild(selector2);
    selector2.appendChild(optgroup2);

    var fontList = ['default','30','40','50','60'];
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

    var colorList = ['default','blue','red','green','white'];
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

    optgroup4.setAttribute('label', 'Fontsize')
    menu.appendChild(selector4);
    selector4.appendChild(optgroup4);

    var backgroundList = ['default','blue','red','green','black'];
    for (i=0; i< backgroundList.length;i++) 
    {
        var o = document.createElement('option');
        o.setAttribute("value", backgroundList[i]);
        var t = document.createTextNode(backgroundList[i]);
        o.appendChild(t);
        optgroup4.appendChild(o);

    }

}