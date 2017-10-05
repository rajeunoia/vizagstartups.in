var divs = document.getElementsByClassName("content");

var ref = firebase.database().ref('eventList/');

ref.on('value',data,error);

function data(data)
{
    var cards = data.val();
    
    var keys = Object.keys(cards);
        
    for(var div = 0;div < 6;div++)
    {
        var childs = divs[div];
        
        childs.children[0].innerHTML = cards[keys[div]].evnt_name;
        
        childs.children[1].innerHTML = " " + cards[keys[div]].evnt_date;
        
        childs.children[2].children[0].innerHTML = cards[keys[div]].evnt_start;
    
        childs.children[3].innerHTML = cards[keys[div]].evnt_location;
        
     //   childs.children[4].href = cards[keys[div]].readmore;
    }
}

function error(error)
{
    console.log(error);
}

