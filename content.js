// Hash function, take a string as input, return a hash integer
const stringToHash = (str) => {
  let hash = 0;
  for(let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

// Convert a hash integer to a hex color code
const hashToColor = (hash) => {
  return "#" + ((hash >> 24 & 255).toString(16) + 
                (hash >> 16 & 255).toString(16) + 
                (hash >> 8 & 255).toString(16) + 
                (255 & hash).toString(16)).slice(0,6);
}

// Main function that creates and adds a floating element on the page
const createFloatingElement = () => {
  // Get the current hostname
  const hostname = window.location.hostname;

  // Convert the hostname to a hash, and then convert the hash to a color
  const hash = stringToHash(hostname);
  const color = hashToColor(hash);

  // Create a new div element
  const div = document.createElement("div");
  div.id = "pje-floating-element";
  div.style.backgroundColor = color;
  div.style.height = "50px";
  div.style.width = "200px";
  div.style.position = "fixed";
  div.style.bottom = "20px";
  div.style.left = "20px";
  div.style.zIndex = "9999";
  div.style.padding = "10px";
  div.style.borderRadius = "10px";
  div.style.boxShadow = "0px 0px 10px 2px rgba(0,0,0,0.1)";

  // Create a new span element
  const span = document.createElement("span");
  span.style.color = "white";
  span.style.fontFamily = "Arial, sans-serif";
  span.style.fontSize = "14px";
  span.style.fontWeight = "bold";
  span.style.textAlign = "center";
  span.style.display = "block";
  span.style.lineHeight = "30px";
  span.style.textShadow = "2px 2px 2px rgba(0,0,0,0.5)";
  span.textContent = hostname;

  // Append the span to the div, and the div to the body
  div.appendChild(span);
  document.body.appendChild(div);
};

// Call the main function
createFloatingElement();
