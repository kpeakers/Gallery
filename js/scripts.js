function Picture(pictureSrc, author, tags, title) {
    
    this.pictureSrc = pictureSrc;
    this.author = author; 
    this.tags = tags;
    this.title = title;
    
    this.display = function() {
        
    var container = $("<div>")    
    this.tags.forEach(function(tag){
        container.addClass(tag)
    }) 
    
    container.addClass("picture")

    //create a string containing image information
    var picString = "";
    //the img source
    picString += pictureSrc;
    //append author
    picString += "<br><cite>" + author + "</cite>";   
    picString += "<p>" + title + "</p>";
    picString += "<h1>" + tags + "</h1>";
    container.html(picString);
    $(".pictures").prepend(container);
    
    }

};

 var pictures = [
    new Picture('<img src="imgs/gardens1.jpg" alt="gardens">', "Kaylee Peake", ["fantasy", "scenic", "nature"], "Gardens"),
    new Picture('<img src="imgs/imdone.jpg" alt="butterfly edit">', "Kaylee Peake", ["butterfly", "dark", "weird"], "imdone"),
    new Picture('<img src="imgs/planet.jpg" alt="planet edit">', "Kaylee Peake", ["planet", "space", "weird"], "Blue Planet"), 
     new Picture('<img src="imgs/planet2.jpg" alt="plnet edit">', "Kaylee Peake", ["planet", "space", "nature"], "They're Moons"),
     new Picture('<img src="imgs/planet3.jpg" alt="planet edit">', "Kaylee Peake", ["nature", "planet", "space"], "Make an Alien Out of You"),
     new Picture('<img src="imgs/poorchid.jpg" alt="flower edit">', "Kaylee Peake", ["flower", "weird", "dark"], "Poorchid"),
     new Picture('<img src="imgs/rose.jpg" alt="flower edit">', "Kaylee Peake", ["flower", "nature", "dark"], "Rose"),
     new Picture('<img src="imgs/scene1.jpg" alt="nature edit">', "Kaylee Peake", ["nature", "scenic", "fantasy"], "Valley"),
     new Picture('<img src="imgs/scene2.jpg" alt="nature edit">', "Kaylee Peake", ["flower", "weird", "nature"], "So Fluffy I'm Gonna Die"),
     new Picture('<img src="imgs/scene3.jpg" alt="flower edit">', "Kaylee Peake", ["flower", "fantasy", "nature"], "i c e"),
 ];

//global taglist
var tagList = []
pictures.forEach(function(picture){
    picture.display();
    picture.tags.forEach(function(tag){
        //check to see if tag has been added to taglist
        if(!tagList.includes(tag)){
        //if isnt added, add it
        tagList.push(tag);
        //and make a button for it
     $(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
        }

    })
});

console.log(tagList)

var buttonToggled = false;
$(".filter").on("click", function(){
//    buttonToggled =  !buttonToggled;
//    if(buttonToggled == true) {
//        console.log("pressed");
//          var tag = $(this).attr("id");
//            console.log(tag);
//            $(".picture").not("." + tag).hide();
//            $("." + tag).fadeIn();
//            
//            $(".active").removeClass;
//            $(this).addClass("active");
//    }
//    else {
        console.log("UN pressed");
        var tag = $(this).attr("id");
            console.log(tag);
            $(".picture").not("." + tag).hide();
            $("." + tag).fadeIn();
            
            $(".active").removeClass("active");
           $(this).addClass("active");
//    }
})


var img1 = {
    title: "Garden",
    author: "Kaylee Peake",
    tags: "fantasy, scenic, nature"
    
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
    tags: "nature, planet, space"
    
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
    title: "So Fluffy I'm Gonna Die.",
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