const MAPBOX_ACCESS_TOKEN = 
'pk.eyJ1IjoiYWZuYW5xdXJlc2hpIiwiYSI6ImNrdG13Nm8yeDI5cXkyb3FubW5iNDZlMzUifQ.JyQbZEpAClU9oDWVC3xozw';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {
    enableHighAccuracy : true
})
function setupMap(centerPosition){
    const map = new mapboxgl.Map({

        accessToken : MAPBOX_ACCESS_TOKEN ,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : centerPosition ,
        zoom :15
    })
    //  const navigationControls = new mapboxg1.NavigationControl() // L OR 1 KA DIFFERENCE THA LOL 
      const navigationControls = new mapboxgl.NavigationControl()

    map.addControl(navigationControls);

    const directionControls = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN,
        })
        //'top-left'
        map.addControl(directionControls,"top-left")   
}
function successLocation (position){
    setupMap([position.coords.longitude,position.coords.latitude])
    
    }
function errorLocation( )
{   setupMap([-2.34,53.48])
    console.log("ERROR")
}
