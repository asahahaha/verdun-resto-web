//GEOG 384 - Assignment #2 - Fall 2022

var config = {
    style: 'mapbox://styles/eliasgco/cl9hf28gq001a14qyy37qz53d',
    accessToken: 'pk.eyJ1IjoiZWxpYXNnY28iLCJhIjoiY2w3cWVheno4MDRuMDQwazFrN256MXA0bSJ9.D7e0onD9JDv_CSHtYz7P2g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Cool Places to Eat' + String.fromCodePoint(0x1F374)+ 'in Verdun, Montreal',
    subtitle: '30 Best Rated Restaurants Located in the Historic Neighborhood!',
    byline: 'Tip: Zoom in to see more information about each food place!'+'\n'+
            'Restaurants with higher rating have bigger points' + 	String.fromCodePoint(0x1f92b) + '\n\n'
              + 'By Eli, Joy, Keyu, and Yanbing',
    footer: 'Source: Rating and average prices based on https://www.restomontreal.ca/.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: true,
            title: '',
            description: 'Tip: Zoom in to see more information about each food place!',
            location: {
                center: [-73.57335, 45.46409],
                zoom: 13.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ],



};
