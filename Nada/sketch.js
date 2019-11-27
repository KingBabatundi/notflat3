'use strict';

//Change ONLY the first two values after = 
//ONLY use single digits. 8 is good! 08 will not work 

//DATE - Vertical
//day
var Day = 8;
var DayMin = 1;
var DayMax = 31;
//month
var Month = 11;
var MonthMin = 1;
var MonthMax = 12;
//year
var Year = 19;
var YearMin = 19;
var YearMax = 20;

//Location - Horizontal
//location
var Location = 60;
var LocationMin = 60;
var LocationMax = 79;

//Time of Start - Horizontal
//hour
var TimeStart_Hour = 1;
var TimeStart_HourMin = 0;
var TimeStart_HourMax = 23;
//minute
var TimeStart_Minutes = 1;
var TimeStart_MinutesMin = 0;
var TimeStart_MinutesMax = 59;


//Feelings - Vertical
//feeling 1
var Feeling1 = 80;
var Feeling1Min = 80;
var Feeling1Max = 99;
//feeling 2
var Feeling2 = 81;
var Feeling1Min = 80;
var Feeling1Max = 99;

//#of people - Dot
var noOfPeople = 1;
var noOfPeopleMin = 1;
var noOfPeopleMax = 99;


//Time of End - Horizontal
//hour
var TimeEnd_Hour = 1;
var TimeEnd_HourMin = 0;
var TimeEnd_HourMax = 23;
//minute
var TimeEnd_Minutes = 1;
var TimeEnd_MinutesMin = 0;
var TimeEnd_MinutesMax = 59;


// the gui object
let gui;
let bugs = []; // array of Jitter objects

function setup() {
  
 createCanvas(566, 800);
  // createCanvas(windowWidth, windowHeight);

  // Create the GUI
  gui = createGui('p5.gui');
  gui.addGlobals('Day','Month','Year','Location','TimeStart_Hour','TimeStart_Minutes','Feeling1','Feeling2', 'noOfPeople','TimeEnd_Hour','TimeEnd_Minutes');

  // for (let i = 0; i < myNumber; i++) {
  //   bugs.push(new Line());
  // }
  // Only call draw when then gui is changed
  noLoop();
}

function draw() {
  background(255);
  
  // for (let i = 0; i < bugs.length; i++) {
  //   bugs[i].display();
  // }

// DATE - Vertical
  line((Day*5.6), 0, (Day*5.6), windowHeight);
  line((Month*5.6), 0, (Month*5.6), windowHeight);
  line((Year*5.6), 0, (Year*5.6), windowHeight);

// Location - Horizontal 
  line(0, (Location*8), windowWidth, (Location*8));
  
 // Time of Start - Horizontal 
  line(0, (TimeStart_Hour*8), windowWidth, (TimeStart_Hour*8));
  line(0, (TimeStart_Minutes*8), windowWidth, (TimeStart_Minutes*8));
  
// Feelings - Vertical 
  line((Feeling1*5.6), 0, (Feeling1*5.6), windowHeight);
  line((Feeling2*5.6), 0, (Feeling2*5.6), windowHeight);


// # of people - Dot 
  ellipse((noOfPeople*5.6), (noOfPeople*8), 4, 4);

// Time of End - Horizontal 
  line(0, (TimeEnd_Hour*8), windowWidth, (TimeEnd_Hour*8));
  line(0, (TimeEnd_Minutes*8), windowWidth, (TimeEnd_Minutes*8));
  

}

function keyTyped() {
  if (key === 's') {
    save(Year+'-'+Month+'-'+Day+'-'+TimeStart_Hour+'-'+TimeStart_Minutes+'-'+Location+'-'+ Feeling1+'-' + Feeling2+'-' + noOfPeople+'-' + TimeEnd_Hour+'-' + TimeEnd_Minutes + '.jpg');
  }

}