// on clicking *any* p tag, change the font of that one p tag to comic sans
// HINT: you might need to loop over all the p tags somehow...
// HINT 2: querySelectorAll is a nice way to get all the p tags
// use this for the font family: "Comic Sans MS", cursive, sans-serif

// get all the p tags on the page
const allPs = document.querySelectorAll("p")
// iterate through the p tags
allPs.forEach(function (oneP) {
  // for each p tag, add an event listener for a click
  oneP.addEventListener("click", function (e) {
    // in the event listener, do a thingy
    e.target.style.fontFamily = '"wingdings", cursive, sans-serif'
  })
})

// arr = [1,2,3]
// arr.each do |num|
//   puts num * 2
// end


// 1. What element are we listening for events

// 2. What kind of event are we listening for

// 3. What do we want to happen (what function do we want to run)
