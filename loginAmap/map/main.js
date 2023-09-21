if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtZiIsImEiOiJjaWZ3bGhtdjgzMnN1dWdrcnEwZTVieG91In0.DkCY-91coDahKvpH7Z26dw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-122.33, 47.60],
  zoom: 14
});

var loc = 
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Underdog": "A. O. Hammer",
        "Appearal": "Art",
        "Clothing and Appearal": "Fine Art Store",
        "website": "www.aohamer.com",
        "": "",
        "Address": "2125 2nd Ave., Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.343417,
          47.612662
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Gandy's Barbershop",
        "Appearal": "Barbershop",
        "Clothing and Appearal": "",
        "website": "http://www.gandysbarbershop.com/",
        "": "",
        "Address": "10121 Evergreen Way, Suite 11",
        "Seattle": "Everett"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.242318,
          47.906667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Golden Shears",
        "Appearal": "Barbershop",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "9099 Seward Park Avenue S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.263102,
          47.520599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Larry's Afro Barber & Style Shop",
        "Appearal": "Barbershop",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "3017 E. 5th Ave",
        "Seattle": "Spokane"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.338747,
          47.613439
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "QC the Barber",
        "Appearal": "Barbershop",
        "Clothing and Appearal": "",
        "website": "http://www.509barberqc.com/index.html",
        "": "",
        "Address": "Seattle",
        "Seattle": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "VALENTINO'S HAIR & WIG BOUTIQUE",
        "Appearal": "Beauty Supply",
        "Clothing and Appearal": "",
        "website": "http://valentinosboutique.blogspot.com/",
        "": "",
        "Address": "12201 Pacific Ave. S.",
        "Seattle": "Tacoma"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.434444,
          47.145597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Diva's Beauty Supply",
        "Appearal": "Beauty Supply & Hair Braiding",
        "Clothing and Appearal": "hair braiding, weaving, wigs, and beauty supplies",
        "website": "http://www.divasbeautysupply-wigs-hairbraiding.com/",
        "": "",
        "Address": "16911 Highway 99 Suite102",
        "Seattle": "Lynnwood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.334157,
          47.548238
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Brother's Books",
        "Appearal": "Black Book Store",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "11443 Rainier Ave",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.22109,
          47.500135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Black Genealogy Research Group of Seattle",
        "Appearal": "Black/African American Genealogy",
        "Clothing and Appearal": "conducting African-American Family History research",
        "website": "http://bgrgseattle.blogspot.com/",
        "": "",
        "Address": "PO Box 22848",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.709305,
          46.591989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Black Heritage Society of Washington State",
        "Appearal": "Black/African American Genealogy",
        "Clothing and Appearal": "documenting the culture and heritage of Black people statewide",
        "website": "http://www.bhswa.org/",
        "": "",
        "Address": "PO Box 22961",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.709305,
          46.591989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "100 Black Men of Greater Seattle",
        "Appearal": "Community Service",
        "Clothing and Appearal": "Black Men as Role Models",
        "website": "http://www.100blackmen.org/hunchapters.aspx",
        "": "",
        "Address": "1700 7th Avenue Suite 116 #334",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.335476,
          47.613815
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Communications Energy Technology Solutions Inc",
        "Appearal": "Contractor",
        "Clothing and Appearal": "Industrial, Commercial and Marine Electrical Installation",
        "website": "http://www.cetsinc.com/",
        "": "",
        "Address": "1441 N Nothlake Way",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.338707,
          47.646902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "AllTreatment",
        "Appearal": "Drug Rehab Center",
        "Clothing and Appearal": "",
        "website": "http://www.alltreatment.com/wa",
        "": "",
        "Address": "999 Third Ave",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.333737,
          47.60525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Sistah Sinema",
        "Appearal": "Film",
        "Clothing and Appearal": "LGBT, movies, queer, women of color",
        "website": "www.sistahsinema.com",
        "": "",
        "Address": "Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Fish On Bait and Tackle Shop / Cafe",
        "Appearal": "Fishing",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "955 Alaskan Way W. Pier 86",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33879,
          47.60371
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Eastside Golf Club",
        "Appearal": "Golf Club",
        "Clothing and Appearal": "senior golfers from six different golf clubs on the eastside of Oregon",
        "website": "http://www.eastsidegolf.org/",
        "": "",
        "Address": "Seattle",
        "Seattle": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Fir State Golf Club",
        "Appearal": "Golf Club",
        "Clothing and Appearal": "",
        "website": "http://www.firstategolfclub.com/",
        "": "",
        "Address": "3418 Martin Luther King Way S. P.O. Box 18615",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.25547,
          47.486065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "MV Transporation Inc.",
        "Appearal": "Ground Transportation",
        "Clothing and Appearal": "",
        "website": "www.mvtransit.com",
        "": "",
        "Address": "Seattle",
        "Seattle": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Roses & Siga African Hair Braiding",
        "Appearal": "Hair Braiding",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "6301 Rainier Avenue S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.275958,
          47.545981
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "AmaniSalon",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "Hair Extention Serivces",
        "website": "amanisalon.setmore.com",
        "": "",
        "Address": "16825 48th Ave W, Suite 333",
        "Seattle": "Lynnwood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.298052,
          47.845798
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Gorgeous Braids and Weaves",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "Weaves, Braids, Crochet Braids, Fusions",
        "website": "https://www.styleseat.com/m/book/s/gorgeousbraidsweavesalonmobilesrvava-seattle-wa",
        "": "",
        "Address": "2301 South Jackson, Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.300973,
          47.599275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "I AM Natural Beauty Salon",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "dreadlocks, weaves, braids, and more protective styles",
        "website": "http://www.iamnaturalbeauty.com/",
        "": "",
        "Address": "9462 Rainier Ave S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.262274,
          47.520169
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Kinetic Kinks",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "6326 Rainier Avenue South -",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.275111,
          47.54535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Living Color Beauty Salon -",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "natural braiding and weaving salon",
        "website": "",
        "": "",
        "Address": "9416 Rainier Ave S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.263986,
          47.519974
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Mane Blow Dry Bar",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "717 Pine St, Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33419,
          47.612665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Michaela's Salon and Spa",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "822 12th Ave, Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.316797,
          47.609637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Nai Millér Beauty Salon",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "Classic and modern hairstyling for men, women, and children",
        "website": "",
        "": "",
        "Address": "4270 South Mead Street",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.277602,
          47.550419
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Ola Salon",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "",
        "website": "http://www.olasalon.com/",
        "": "",
        "Address": "2942 Avalon Way SW",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.370742,
          47.56978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "The Kolmara Studio",
        "Appearal": "Hair Salon",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "2308 East Madison St, Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.301954,
          47.619585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Graceful Healing",
        "Appearal": "Health - nonprofit",
        "Clothing and Appearal": "health rights advocate/medical cost assistance ",
        "website": "http://gracefulhealingus.org/",
        "": "",
        "Address": "19019 International Blvd #138 ",
        "Seattle": "Seatac"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.295445,
          47.432285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Sacred Light Birth Services",
        "Appearal": "Health & Wellness",
        "Clothing and Appearal": "",
        "website": "www.sacredlightbirthservices.com",
        "": "",
        "Address": "Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "African American Business & Employment Journal",
        "Appearal": "Newspaper",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "PO Box 22258",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.709305,
          46.591989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Seattle Medium",
        "Appearal": "Newspaper",
        "Clothing and Appearal": "",
        "website": "http://seattlemedium.com/",
        "": "",
        "Address": "2600 South Jackson, Post Office 22047, Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.29842,
          47.59943
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "The Facts",
        "Appearal": "Newspaper",
        "Clothing and Appearal": "",
        "website": "http://www.nwfacts.com/",
        "": "",
        "Address": "Post Office Box 22015, Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Dazjanae Johnson, Real Estate Agent",
        "Appearal": "REALTOR®",
        "Clothing and Appearal": "Assists with homeownership goals/investments",
        "website": "HomesByDaz.com   (206)619-7029",
        "": "",
        "Address": "Western Washington",
        "Seattle": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.336969,
          46.296908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Alexandria's",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Soul Food",
        "website": "",
        "": "",
        "Address": "2020 2nd Ave., Seattle",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.342605,
          47.612188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Dallas BBQ Soul Food And Catering",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Soul Food",
        "website": "",
        "": "",
        "Address": "2519 S Jackson St",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.299057,
          47.599256
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "DeeZ DogZ",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Seattle Style Hot Dogz",
        "website": "",
        "": "",
        "Address": "3020 Issaquah Pine Lake Rd #568",
        "Seattle": "Sammamish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Ezels Famous Chicken",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Soul Food",
        "website": "https://www.ezellschicken.com/",
        "": "",
        "Address": "Seattle",
        "Seattle": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Island Soul Restaurant",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Island Soul Caribbean Cuisine",
        "website": "http://www.islandsoulrestaurant.com/home.html",
        "": "",
        "Address": "4869 Rainier Ave S.",
        "Seattle": "South Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.285253,
          47.558224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Meskel Ethiopian Resturant",
        "Appearal": "Resturant",
        "Clothing and Appearal": "",
        "website": "http://www.meskelrestaurant.com/",
        "": "",
        "Address": "2605 East Cherry Street",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.298648,
          47.608004
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Nate's Wings and Waffles",
        "Appearal": "Resturant",
        "Clothing and Appearal": "",
        "website": "www.nateswingsandwaffles.com",
        "": "",
        "Address": "9261 57th Ave S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.261584,
          47.51983
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Rose Petals Restaurant",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Southern/Soul Food",
        "website": "places.singleplatform.com",
        "": "",
        "Address": "6901 Martin Luther King Jr Way S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.28295,
          47.540437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "The Right Taste",
        "Appearal": "Resturant",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "6901Mlk Way S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Willie's Taste of Soul BBQ",
        "Appearal": "Resturant",
        "Clothing and Appearal": "Soul Food",
        "website": "http://www.williestasteofsoulseattle.com/",
        "": "",
        "Address": "3427 Rainier Ave S",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.293467,
          47.57218
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Lunaversoul Jewelry",
        "Appearal": "Retail Jewlery",
        "Clothing and Appearal": "",
        "website": "www.lunaversoul.com",
        "": "",
        "Address": "401 Olympia Ave.NE Suite 311",
        "Seattle": "Renton"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.17196,
          47.489133
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Name",
        "Appearal": "Type",
        "Clothing and Appearal": "Description",
        "website": "Website",
        "": "",
        "Address": "Seattle",
        "Seattle": "City"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Good Hair Salon",
        "Appearal": "",
        "Clothing and Appearal": "",
        "website": "http://goodhairsalon.com/",
        "": "",
        "Address": "1918 Yesler Studio C",
        "Seattle": "Seattle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.30674,
          47.60193
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Underdog": "Lika Love",
        "Appearal": "",
        "Clothing and Appearal": "",
        "website": "",
        "": "",
        "Address": "Seattle",
        "Seattle": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33028,
          47.603229
        ]
      }
    }
  ]
}


map.on('load', function(e) {
  map.addSource('places', {
   type: 'geojson',
   data: loc
 });

  buildLocationList(loc);
});

function buildLocationList(data) {
  for(i=0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    var prop = currentFeature.properties;

    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing' + i;

    var link = listing.appendChild(document.createElement('a'));
   link.href = '#';
   link.className = 'title';
   link.dataPosition = i;
   link.innerHTML = prop.Underdog;

link.addEventListener('click', function(e) {

  var clickedListing = data.features[this.dataPosition];
  flyToStore(clickedListing);
  createPopUp(clickedListing);
  var activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  }
  this.parentNode.classList.add('active');
});

    var details =listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.Seattle;
    if(prop.website) {
      details.innerHTML += "<h3>" + prop.website;
    }
  }
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName ('mapboxgl-popup');
  if(popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({closeOnClick: false})
  .setLngLat(currentFeature.geometry.coordinates)
  .setHTML('<h3>' + currentFeature.properties.Underdog + '</h3>' + '<h4>' + currentFeature.properties.Appearal + '<h4>' + currentFeature.properties.Address +'</h4>')
  .addTo(map);
}

loc.features.forEach(function(marker) {
  var el = document.createElement('div');
  el.className = 'marker';
  new mapboxgl.Marker(el, { offset: [0, -23] })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    el.addEventListener('click', function(e) {
    var activeItem = document.getElementsByClassName('active');
    flyToStore(marker);
    createPopUp(marker);
    e.stopPropagation();
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }

    var listing = document.getElementById('listing-' + i);
    console.log(listing);
    listing.classList.add('active');
  });
});


map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);
