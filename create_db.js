var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db ("mydb");
  var myobj= [
  {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Van Dorn Street",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.12911152,
          38.79930767
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Franconia-Springfield",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.16797018,
          38.76652189
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Federal Center SW",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.01586822,
          38.88507236
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Judiciary Sq",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.01663896,
          38.89609032
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Capitol South",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.00513942,
          38.8850625
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Metro Center",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.028078,
          38.89831447
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gallery Pl-Chinatown",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02191539,
          38.89831681
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mt Vernon Sq - 7th St Convention Center",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02191438,
          38.90643681
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "U St/African-Amer Civil War Memorial/Cardozo",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02749589,
          38.9170024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Union Station",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.00741429,
          38.89776604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Congress Heights",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.98851193,
          38.8456577
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Naylor Road",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.95626271,
          38.85130138
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Suitland",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.93187016,
          38.84396455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Branch Ave",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.91146422,
          38.82644635
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Braddock Road",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05366757,
          38.81414367
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "King St - Old Town",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.06081121,
          38.80658612
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Eisenhower Ave",
        "marker-color": "#ffff00",
        "marker-symbol": "rail-metro",
        "line": "yellow"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.07087439,
          38.80042545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Huntington",
        "marker-color": "#ffff00",
        "marker-symbol": "rail-metro",
        "line": "yellow"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.07520579,
          38.79391585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Anacostia",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.99537074,
          38.86296312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Eastern Market",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.99600113,
          38.88462226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Potomac Ave",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.98549532,
          38.88126327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Stadium Armory",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.9770889,
          38.88670909
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rhode Island Ave",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.99593692,
          38.92105969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Minnesota Ave",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.94674773,
          38.89919122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Van Ness-UDC",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.06298618,
          38.94326529
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cleveland Park",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05804252,
          38.93476289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Columbia Heights",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.03255212,
          38.92783797
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "College Park-U of Md",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.92812498,
          38.97863363
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Capitol Heights",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.91180811,
          38.88946586
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Morgan Boulevard",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.86807477,
          38.89383493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Georgia Ave Petworth",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0234609,
          38.93743463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Takoma",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0181767,
          38.97607853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Glenmont",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05355736,
          39.06178377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wheaton",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05010705,
          39.03752714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Forest Glen",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.04291655,
          39.01495428
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Silver Spring",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.03101783,
          38.99394937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Brookland-CUA",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.99453429,
          38.93321099
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Fort Totten",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.00220308,
          38.95184677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Prince George's Plaza",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.95588151,
          38.96538545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "West Hyattsville",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.96957668,
          38.95504017
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Benning Road",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.93836487,
          38.89097568
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Addison Road Seat Pleasant",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.89410791,
          38.88674782
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Deanwood",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.93525678,
          38.9081785
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "New Carrollton",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.87184129,
          38.94778486
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Landover",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.89119797,
          38.93350623
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cheverly",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.91662804,
          38.91663185
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Largo Town Center",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.84203752,
          38.90506881
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "NoMa - Gallaudet U",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.00302045,
          38.90701621
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rosslyn",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.07090869,
          38.8959791
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Arlington|Cemetery",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.06281013,
          38.88468686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dupont Circle",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.04341436,
          38.90959806
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pentagon",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05371567,
          38.8694627
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Crystal City",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05028981,
          38.85790432
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Navy Yard - Ballpark",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.00508565,
          38.87648108
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "McPherson Sq",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.03363417,
          38.9013328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Shaw-Howard Univ",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0219117,
          38.91347687
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Southern Ave",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.97505414,
          38.84108578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Greenbelt",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.91105757,
          39.01114586
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tenleytown-AU",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.07958733,
          38.94885144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "West Falls Church VT/UVA",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.18909482,
          38.90078055
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dunn Loring Merrifield",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.22716067,
          38.88362514
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Vienna Fairfax-GMU",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.27262226,
          38.87760112
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Friendship Heights",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.08499581,
          38.95948387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Shady Grove",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.16462733,
          39.11992732
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rockville",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.14612534,
          39.08432161
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Twinbrook",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.12081795,
          39.06246765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "White Flint",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.11282986,
          39.04815136
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Grosvenor-Strathmore",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.10384972,
          39.02926895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Medical Center",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.09695229,
          39.00005648
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bethesda",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.09412919,
          38.98439366
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Foggy Bottom GWU",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05027774,
          38.90069801
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Court House",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.08713123,
          38.89017553
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Clarendon",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0953941,
          38.88670484
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "East Falls Church",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.15688302,
          38.88595317
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Virginia Square-GMU",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.10297729,
          38.88336615
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ballston-MU",
        "marker-color": "#ffa500",
        "marker-symbol": "rail-metro",
        "line": "orange"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.11316884,
          38.88218287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Farragut West",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.04069542,
          38.90131289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Farragut North",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.03970083,
          38.90320195
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Woodley Park-Zoo Adams Morgan",
        "marker-color": "#ff0000",
        "marker-symbol": "rail-metro",
        "line": "red"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05241802,
          38.92508514
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "L'Enfant Plaza",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02190848,
          38.88483773
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Smithsonian",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02806623,
          38.8880187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pentagon City",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.05953892,
          38.86188239
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Federal Triangle",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.028132,
          38.89318087
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Archives-Navy Mem'l",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02191439,
          38.89366522
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Waterfront",
        "marker-color": "#008000",
        "marker-symbol": "rail-metro",
        "line": "green"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.01750521,
          38.87646187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ronald Reagan Washington National Airport",
        "marker-color": "#0000ff",
        "marker-symbol": "rail-metro",
        "line": "blue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.04404229,
          38.85341639
        ]
      }
    }
  ]
}
  ];
  dbo.collection("points").insertMany(myobj, function(err,res){
  	if(err) throw err;
  	console.log("No of documents inserted: " + res.insertedCount );
  	db.close();
  });
  //console.log("Database created!");
  //db.close();
});