// Function to hash a string
const stringToHash = (str) => {
  let hash = 0;
  for(let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

// Function to convert an integer to a hexadecimal color code
const intToHex = (int) => {
  return "#" + (
      (int >> 24 & 255).toString(16) +
      (int >> 16 & 255).toString(16) +
      (int >> 8 & 255).toString(16) +
      (255 & int).toString(16)
  ).slice(0, 6);
};

// Function to create a floating element
const createFloatingElement = () => {
  // Get the hostname
  const hostname = window.location.hostname;
  
  // Hash the hostname
  const hash = stringToHash(hostname);
  
  // Convert the hash to a color
  const color = intToHex(hash);
  
  // Create a new div element
  const floatingElement = document.createElement("div");

  // Set the id and styles of the div
  floatingElement.id = "pje-floating-element";
  floatingElement.style.backgroundColor = color;
  floatingElement.style.height = "50px";
  floatingElement.style.width = "200px";
  floatingElement.style.position = "fixed";
  floatingElement.style.bottom = "20px";
  floatingElement.style.left = "20px";
  floatingElement.style.zIndex = "9999";
  floatingElement.style.padding = "10px";
  floatingElement.style.borderRadius = "10px";
  floatingElement.style.boxShadow = "0px 0px 10px 2px rgba(0,0,0,0.1)";

  // Create a new span element
  const spanElement = document.createElement("span");

  // Set the styles and content of the span
  spanElement.style.color = "white";
  spanElement.style.fontFamily = "Arial, sans-serif";
  spanElement.style.fontSize = "14px";
  spanElement.style.fontWeight = "bold";
  spanElement.style.textAlign = "center";
  spanElement.style.display = "block";
  spanElement.style.lineHeight = "30px";
  spanElement.style.textShadow = "2px 2px 2px rgba(0,0,0,0.5)";
  spanElement.textContent = hostname;

  // Add the span to the div
  floatingElement.appendChild(spanElement);

  // Add the div to the body
  document.body.appendChild(floatingElement);
};

// Call the function to create the floating element
createFloatingElement();
