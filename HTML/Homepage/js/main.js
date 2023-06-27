function initMap(){
    const loc = {lat:47.920888, lng:106.921122};
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom: 14, 
        center:loc
    })
    const marker = new google.maps.Marker({position:loc,map:map});

}