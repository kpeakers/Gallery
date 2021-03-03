function Quote(quoteText, author, tags, color) {
    
    this.quote = quoteText;
    this.author = author; 
    this.tags = tags;
    this.color = color;
    
    this.display = function() {
        
    var container = $("<div>")    
    this.tags.forEach(function(tag){
        container.addClass(tag)
    }) 
    
    container.css("background", this.color)
    container.addClass("quote")
        
    var quoteString = "";
    quoteString += "<p>" + this.quote + "</p>";
    quoteString += "<cite>" + this.author + "</cite>";        
       
    container.html(quoteString)
    $(".quotes").prepend(container);
    
    }

};

var quotes = [ 
    new Quote('"We don\'t make mistakes, just happy little accidents."', "Bob Ross", ["painting", "mistakes"], "#0a3410"),
    new Quote('"Creativity takes courage."', "Henry Matisse", ["painting", "creativity"], "#8aade6")
 ];

//global taglist
var tagList = []
quotes.forEach(function(quote){
    quote.display();
    quote.tags.forEach(function(tag){
        //check to see if tag has been added to taglist
        if(!tagList.includes(tag))
        //if isnt added, add it
        tagList.push(tag);
        //and make a button for it
     $(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")

    })
});

console.log(tagList)

$(".filter").on("click", function(){
    var tag = $(this).attr("id");
    console.log(tag)
    $(".quote").not("." + tag).hide();
    $("." + tag).fadeIn();
    
    $(".filter").removeClass
    $(this).addClass(".active");

})



var img1 = {
    title: "Garden",
    author: "Kaylee Peake",
    tags: "fantasy, sunset, nature"
    
};

var img2 = {
    title: "imdone",
    author: "Kaylee Peake",
    tags: "butterfly, dark, weird"
    
};

var img3 = {
    title: "Blue Planet",
    author: "Kaylee Peake",
    tags: "planet, space, weird"
    
};

var img4 = {
    title: "They're Moons",
    author: "Kaylee Peake",
    tags: "planet, space, nature"
    
};

var img5 = {
    title: "Make an alien out of you",
    author: "Kaylee Peake",
    tags: "fantasy, space, nature"
    
};

var img6 = {
    title: "Poorchid",
    author: "Kaylee Peake",
    tags: "flower, weird, dark"
    
};

var img7 = {
    title: "Rose",
    author: "Kaylee Peake",
    tags: "flower, nature, dark"
    
};

var img8 = {
    title: "Valley",
    author: "Kaylee Peake",
    tags: "nature, scenic, fantasy"
    
};

var img9 = {
    title: "So fluffy I'm gonna die.",
    author: "Kaylee Peake",
    tags: "flower, weird, nature"
    
};

var img10 = {
    title: "i c e",
    author: "Kaylee Peake",
    tags: "flower, fantasy, nature"
    
};


//console.log (quotes)
//
//var quoteString = "";
//quotes.forEach(function(quote){
//    
//    quoteString = "<p>" + quote + "</p>"
//    
//    console.log(quoteString);
//})
//
//$("body").html(quoteString);
