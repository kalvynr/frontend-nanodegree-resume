/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Kalvyn");

//var awesomeThoughts = "I am Kalvyn and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
//$("#main").append(funThoughts);

/*
var formattedName = HTMLheaderName.replace("%data%", "Kalvyn Rasquinha");
var formattedRole = HTMLheaderRole.replace("%data%", "Product Manager");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

/*
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.slice(1, 2).toUpperCase() + s.slice(2);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
*/

/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var indexOfSpace = finalName.indexOf(' ');
    finalName = finalName[0].toUpperCase() + finalName.slice(1, indexOfSpace).toLowerCase() + finalName.slice(indexOfSpace).toUpperCase();
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
*/

var bio = {
  "name": "John Doe",
  "role": "King of AWESOME",
  "contactInfo": "Chicago, IL",
  "pictureURL": "http://placehold.it/350x150",
  "welcomeMessage": "Hello!",
  "skills": ["Being Awesome", "Smart"]
};

$("#header").prepend("<h1>" + bio.name + "</h1>");

/*
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
console.log(weirdObject.8property));
*/

/*
$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});
*/

/*
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
  var locations = [];
  
  for (var i = 0; i < work_obj.jobs.length; i++) {
    locations.push(work_obj.jobs[i].location);
  }
  
  return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

*/

$("#main").append(internationalizeButton);

var inNameImpl = function(nameStr) {
  console.log("Internationalizing name: " + nameStr);
  
  var internationalName;
  
  var namesArray = nameStr.split(" ");
  internationalName = namesArray[0].slice(0, 1).toUpperCase() + namesArray[0].slice(1).toLowerCase();
  internationalName += " ";
  internationalName += namesArray[1].toUpperCase();
  
  return internationalName;
}

console.log(inNameImpl("sebastian thrun"));

var inName = function() {
  inNameImpl(bio.name);
}