// run the script when the document is loaded
window.onload = function() 
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
    }
    
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

    
    // PAGE SPECIFIC JAVASCRIPT CODE
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

        //Add metaData
        var meta1 = document.createElement("meta");
        var meta2 = document.createElement("meta");
        var meta3 = document.createElement("meta");
        var meta4 = document.createElement("meta");
        meta1.setAttribute("name","viewport");
        meta1.setAttribute("content", "width=device-width, initial-scale=1.0");
        meta2.setAttribute("charset", "utf-8");
        meta3.setAttribute("name", "description");
        meta3.setAttribute("content", "A Game of Thrones information page where you can find all kinds of information on the first book in the book series 'A Song of Ice and Fire' written by George R. R. Martin. This site includes information about A Game of Thrones characters and a plot overview of the book. This site also includes a map with information about regions that lay on the three main continents where the story of A Game of Thrones takes place. You can also learn more about the author of the book George R R Martin as well as the authors of this site.");
        meta4.setAttribute("name", "keywords");
        meta4.setAttribute("content", "Game of Thrones book plot overview summary characters Daenarys Targaryon Rob Sansa Stark Ned Stark Arya Jon Snow Tyrion Lannister Jaime The Wall North Westeros Essos Sothorosys King's landing Dragons fire A song of Ice and Fire series George R R Martin winter is coming The Seven Kingdoms fantasy novel");

        // Add class home to body
        document.body.classList.add("home");

        // Add header
        var header = document.getElementsByTagName('header')[0];
        var heading = document.createElement("h1");
        var headingText = document.createTextNode("Game of Thrones");
        heading.appendChild(headingText);
        header.appendChild(heading);

        //Add Article and sections
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

        //stuff for eventpropagation
        var propInText = document.createElement("p");
        propInText.textContent = "Zoals je kan zien vind hier eventpropagation plaats. Ookal klik je op het diepste vlak, toch worden alle vlakken aangeroepen";
        section.appendChild(propInText);

        //Add three blocks for illustrating eventpropagation
        var block1 = document.createElement("div");
        var block2 = document.createElement("div");
        var block3 = document.createElement("div");
        block1.setAttribute("id", "block1");
        block1.addEventListener("click", c1);
        block2.setAttribute("id", "block2");
        block2.addEventListener("click", c2);
        block3.setAttribute("id", "block3");
        block3.addEventListener("click", c3);
        section.appendChild(block1);
        block1.appendChild(block2);
        block2.appendChild(block3);

        var propText = document.createElement("p");
        propText.textContent = "Propegationtext!";
        section.appendChild(propText);

        //The functions for the evenpropagation
        function c1()
        {
            propText.textContent = "Outside!";
        }
        function c2()
        {
            propText.textContent = "Midde!";
        }
        function c3()
        {
            propText.textContent = "Inside!";
        }

        //Add footer
        var footer =  document.getElementsByTagName('footer')[0];
        var footerImg = document.createElement('img');
        var footerText = document.createTextNode("Created by: Daniël Bezema, Bram Kreuger en Nikki Evers. \n University Utrecht \n Webtechnology \n INFOB2WT ");
        footerImg.setAttribute('src', "images/logos/utrecht_university_english_logo_transparent.png");
        footerImg.setAttribute('alt', 'Image of Utrecht university logo');
        footer.appendChild(footerText);
        footer.appendChild(footerImg);   
    } 


    // PAGE GENERAL JAVASCRIPT CODE

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
    

    // check if window has mobile dimensions
    // only create selects for non-mobile
    if ( window.outerWidth > 420) 
    {
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
        //selector1.change = function() {changeSelector1()};
        selector1.addEventListener("change", changeSelector1);

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
        selector2.addEventListener("change", changeSelector2);

        var selectedFontSize = 30;
        var fontList = ["nothing", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
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
        selector3.addEventListener("change", changeSelector3);

        var selectedColor;
        var colorList = ["nothing",'blue','red','green','white'];
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
        selector4.addEventListener("change", changeSelector4);

        var selectedBackColor;
        var backgroundList = ["nothing",'blue','red','green','black'];
        for (i=0; i< backgroundList.length;i++) 
        {
            var o = document.createElement('option');
            o.setAttribute("value", backgroundList[i]);
            var t = document.createTextNode(backgroundList[i]);
            o.appendChild(t);
            optgroup4.appendChild(o);

        }

        //When this button is pressed the style changes
        var styleButton = document.createElement("button");
        styleButton.textContent = "Change style";
        styleButton.setAttribute("id", "selectorButton");
        styleButton.addEventListener("click", styleChange);
        menu.appendChild(styleButton);

        var selectedElementID = 0;
        function changeSelector1()
        {
            selectedElementID = selector1.value;
            console.log(selectedElementID)
        }

        var selectedFontSize = "nothing";
        function changeSelector2()
        {
            selectedFontSize = selector2.value;
        }
        var selectedColor = "nothing";
        function changeSelector3()
        {
            selectedColor = selector3.value;
        }

        var selectedBackColor = "nothing";
        function changeSelector4()
        {
            selectedBackColor = selector4.value;
        }

        //Change the style according to the inputvalues
        function styleChange()
        {       
            e = semElements[selectedElementID];  
            if(selectedColor != "nothing")        
                e.style.color = selectedColor;
            if(selectedBackColor != "nothing")    
                e.style.backgroundColor = selectedBackColor;
            if(selectedFontSize != "nothing")    
                e.style.fontSize = selectedFontSize;
            
            //If there are any childeren change there style too.
            childeren = semElements[selectedElementID].children
            for(i=0; i < childeren.length; i++)
            {
                if(selectedColor != "nothing")     
                    childeren[i].style.color = selectedColor;
                if(selectedBackColor != "nothing")  
                    childeren[i].style.fontSize = selectedFontSize;
                if(selectedFontSize != "nothing")    
                    childeren[i].style.backgroundColor = selectedBackColor;
            }   

            //If you have selected body remove the image. Otherwise you cant see the new background color.
            if(e.tagName == "BODY" && selectedBackColor != "nothing")
            {
                e.classList.remove(e.className);
            }        
        }

        //Lastly a resetbutton to "reset" the style. But really just to reload the page, which does the job.
        var reloadButton = document.createElement("button");
        reloadButton.setAttribute("id", "selectorButton");
        reloadButton.textContent = "Reset";
        reloadButton.addEventListener("click", function(){location.reload()});
        menu.appendChild(reloadButton);
    }

}