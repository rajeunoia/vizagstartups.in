var divs = document.getElementsByClassName("content");

var ref = firebase.database().ref('startupList/');

ref.on('value',data,error);

function data(data)
{
    
    var cards = data.val();
    
    var keys = Object.keys(cards);
        
    for(var div = 0;div < 6;div++)
    { 
        
        var childs = divs[div].children[0];
        
        childs.children[0].children[0].innerHTML = cards[keys[div]].startupname;
        
        childs.children[2].innerHTML = cards[keys[div]].stdesc;
        
        childs.children[4].innerHTML = cards[keys[div]].stdesc;
        
        childs.children[6].innerHTML = cards[keys[div]].stdesc;
        
        childs.children[7].innerHTML = cards[keys[div]].web;
    }
}

function error(error)
{
    console.log(error);
}

