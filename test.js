window.onload = function() { 
    window.addEventListener("scroll", function(e) { scrollEvent(); 
    }); 
} 
var scrollEvent = function() { 
    var scroll = window.innerHeight + window.scrollY; 
    var itemList = document.querySelectorAll(".list_cont li");
    Array.prototype.forEach.call(itemList, function(li){
        if(li.offsetTop < scroll) {
            li.classList.remove("animatable");
            li.classList.add("animated");
        }
    });
}
