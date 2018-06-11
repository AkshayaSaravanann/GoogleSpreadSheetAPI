# GoogleSpreadSheetAPI

This is a project which helps to get the data from the excel(latitude and longitude) and import it in the map and display the points in the map.
The major language which we use here is NodeJS and JavaScript.


I'm new to github plus this is just my personal repo. So don't worry about the way i have written my language.
Follow the below stated comments in order to execute but before that you should be able to create your own credentials by going into the Google API page and enabling the Google excel API.

Take up the reference stated in the document: https://developers.google.com/sheets/api/quickstart/nodejs
1. execute the command the gsjson spreadsheetcode filename.json
2. Execute the command data.json json2csv|csv2geojson
3. Now after converting to geojson data, we shall import it into the mongodb 
The commmand to be followed is mongoimport --db dbname -c collectionname --file "filename.geojson"
According to my program, execute 
4. node output2.js
5.Open the routepoints.html page

The results are obtained in the page.
