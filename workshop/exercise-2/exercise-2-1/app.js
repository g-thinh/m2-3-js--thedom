// Preset values
const FROGS = 3;

// ##########################################################################
// ########################### Exercises 2.1 ################################
// ##########################################################################

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for(let i = 1; i <= FROGS; i++) {

  // 2. Create li
  let lane = document.createElement('li');
  document.querySelector('ol').appendChild(lane);

  // 3. Create span and add it to the li
  let trackNumber = document.createElement('span');
  document.querySelectorAll('li').forEach(listItem => {
    listItem.appendChild(trackNumber);
    trackNumber.innerText = i;

    // 4. Assign an id to each lane
    lane.setAttribute('id',`lane-${i}`);
  })

}

// ##########################################################################
// ########################### Exercises 2.2 ################################
// ##########################################################################

let racers = [];

for(let i = 0; i < FROGS; i++) {
  // console.log(frogStable[i]);
  racers[i] = frogStable[i];
  racers[i].progress = 0;
  racers[i].id = i+1;
}
console.log(racers);

// ##########################################################################
// ########################### Exercises 2.3 ################################
// ##########################################################################

//Select all of the <li> elements
// let lanes = document.getElementById(`lane-${x}`), x;

// //Create a <div> element in each track, to represent the frogs
// let froggy = document.createElement('span');
// froggy.setAttribute('class','frog');
//to make sure that it was applied to all tracks



//OK so, need to rework this, create specific IDs to each Li track like
// frog-1, frog-2 and frog-3 so that you can use .appendChild()

//loop should be done on racers array not lanes.
//ids should be 1, 2 and 3, so array indexes should be 0+1, 1+1, 2+1;

// for(x = 0; x < lanes.length; x++) {

//   // console.log(`Hello ${x}`);
//   // console.log('Element: ', lanes[x]);

//   //Append child only appends to the last child (last li, parent is ol)
//   //need to add a .cloneNode(true) method to each element that is being added
//   lanes[x].appendChild(froggy.cloneNode(true));
//   console.log(`Frog number ${x} has the color ${racers[x].color}`)
//   //add the colors from the selected frogs and set their progress to 0
//   froggy.style.cssText = `background-color: ${racers[x].color}`;

//   racers[x].progress = 0;

// }

// racers.forEach(function (racer, id) {
//   // add the frogs to a lane
//   // for now, frogs are simply shapes in the lane.
//   const newFrog = document.createElement('span');
//   newFrog.innerText = `${racer.number}`;
//   newFrog.setAttribute('class','frog');
//   newFrog.style.cssText = `background-color: ${racer.color}`;
//   document.getElementById(`lane-${}`)
// });


racers.forEach( racer => {
  let newFroggy = document.createElement('div');
  newFroggy.innerText = `${racer.number}`;
  newFroggy.setAttribute('class','frog');
  newFroggy.style.cssText = `background-color: ${racer.color}`;
  console.log(newFroggy);
  document.getElementById(`lane-${racer.id}`).appendChild(newFroggy);
})


// ##########################################################################
// ########################### Exercises 2.4 ################################
// ##########################################################################
let trackLength = track.offsetWidth;
function racingFrog(frogRacer) {

  //Returns a number from 0 to 1. We will use this to set the jump length a frog 
  //takes relative to the length of the track
  //formula returns a % increment of track length that the frog will jump by
  let jump = Math.round((Math.random() * 100 / trackLength) * 100);
  let progress = frogRacer.progress;
  //.offsetWidth() returns the width of an HTML element, in this case its the <ol>

  //Select Frog and give it its speed
  // console.log(`Frog number ${frogRacer.number}'s speed is ${frogRacer.speed}! `)


  //create a function to move the frog
  function moveFrog() {
    progress += jump;

    if (progress > 100) {
      //if the jump is above 100% of trackwidth, reset it back to the finish line
      progress = 100;

      //stop the setInterval() count
      
      console.log(`Frog number ${frogRacer.number} has finished!`);
      
    }

    document.querySelector(`#lane-${frogRacer.id} .frog`).style.left =
      `${progress}%`;

    // console.log(progress);
  }
  
  
  //use setInterval() to control the hope of a frog.
  //setInterval() requires a function() as the first argument, cannot do
  //setInterval(moveFrog(), Math.random()*1000) because moveFrog() returns a
  //value

  let hop = setInterval(function() {
    progress += jump;

    if (progress > 100) {
      //if the jump is above 100% of trackwidth, reset it back to the finish line
      progress = 100;

      //stop the setInterval() count
      clearInterval(hop);
      console.log(`Frog number ${frogRacer.number} has finished!`);
      
    }

    document.querySelector(`#lane-${frogRacer.id} .frog`).style.left =
      `${progress}%`;

  }, Math.random()*1500);
  
}


racers.forEach(racer => {
  racingFrog(racer);
})


// console.log(racers);
// console.log(racers[0]);

//testing on how to move a frog, using style.left in %
// document.querySelector(`#lane-${racers[0].id} .frog`).style.left = 
//   `${racers[0].speed}%`;



//Process
//1. Select Frog
//2. Adjust CSS for it to translateX()
//3. Create setInterval to make this translation happen in hops