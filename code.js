/// FIRST PART ADDING BASIC HTML/STYLE

// run this function when the document is loaded
window.onload = function() {

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

    //Add nav elements
    var nav = document.getElementsByTagName('nav')[0];
    var links = ["Home", "Plot", "Characters", "World", "Author"];
    for(i=0; i < 5; i++) {
        var navLink = document.createElement("a");
        var navLinkText = document.createTextNode(links[i]);
        navLink.setAttribute('href', links[i].charAt(0).toLowerCase() + links[i].slice(1) + ".html");
        navLink.append(navLinkText);
        nav.appendChild(navLink);
    }
    
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

    // Add section 1
    var section = document.createElement('section');
    var sectionP1 = document.createElement('p');
    var sectionP1Text = document.createTextNode("This is a new section!");
    section.appendChild(sectionP1);
    sectionP1.appendChild(sectionP1Text);
    article.appendChild(section);

    // Add section 2
    var section = document.createElement('section');
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

    // got.author.name == JRRMRNTS martin

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
    //Selectors();
}