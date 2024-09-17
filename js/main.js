let crews = [];
let destinations = [];
let technologys = [];

// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    crews = data.crew; 
    destinations = data.destinations; 
    technologys = data.technology;

    
    
  })
  .catch(error => console.error('Error fetching the data:', error));

// Function to switch the crew member based on the index
function switchCrew(index) {
   // Ensure crew array is not empty
  if (crews.length > 0) {
    const crew = crews[index];
    
    // Update content based on the selected crew
    document.getElementById('info-job').textContent = crew.role;
    document.getElementById('info-person').textContent = crew.name;
    document.getElementById('person-desc').textContent = crew.bio;
    document.getElementById('person-img').src = crew.images.png;

    // Handle the active state for buttons
    const buttons = document.querySelectorAll('.dots__button');
    buttons.forEach((button, num) => {
        button.classList.toggle('active', num === index);
    });
  } else {
    console.error('Crew data is not loaded.');
  }
}

// Function to switch the destination based on the index
function switchDestination(index) {
    // Ensure destinations array is not empty
  if (destinations.length > 0) {
    const destination = destinations[index];
    
    // Update content based on the selected destination
    document.querySelector('.destination__left-img').src = destination.images.png;
    document.querySelector('.text__title').textContent = destination.name;
    document.querySelector('.text__desc').textContent = destination.description;
    document.querySelector('.status__distance-length').textContent = destination.distance;
    document.querySelector('.status__travel-time').textContent = destination.travel;
    
    const planets = document.querySelectorAll('.destination__list-planet');
    planets.forEach((planet, num) => {
        planet.classList.toggle('active', num === index);
    });

  } else {
    console.error('Destinations data is not loaded.');
  }
}


function swichTechnology(index) {
  // Ensure technologys array is not empty
  if (technologys.length > 0) {
      const technology = technologys[index];

      // Update content based on the selected technology
      document.getElementById('rocket-img').src = technology.images.portrait;
      document.getElementById('info-name').textContent = technology.name;
      document.getElementById('technology-desc').textContent = technology.description;

      // Handle the active state for buttons
      const buttons = document.querySelectorAll('.button-btn');
      buttons.forEach((button, num) => {
          button.classList.toggle('active', num === index);
      });
  } else {
      console.error('Technologies data is not loaded.');
  }
}
