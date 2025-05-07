/* Created by: Angelo Garcia
* Created on: May 6, 2025
* This file contains the CSS for index.html
*/
function calculateVolume() {
  // Get the input values
  const base = parseFloat(document.getElementById('base-input').value);
  const triangleHeight = parseFloat(document.getElementById('triangle-height-input').value);
  const pyramidHeight = parseFloat(document.getElementById('pyramid-height-input').value);

  // Validate the inputs
  if (isNaN(base) || isNaN(triangleHeight) || isNaN(pyramidHeight) || base <= 0 || triangleHeight <= 0 || pyramidHeight <= 0) {
    document.getElementById('result').innerHTML = "<span style='color: red;'>Please enter valid positive numbers for all inputs.</span>";
    return;
  }

  // Calculate the base area of the triangle
  const baseArea = 0.5 * base * triangleHeight;

  // Calculate the volume of the pyramid
  const volume = (1 / 3) * baseArea * pyramidHeight;

  // Display the result
  document.getElementById('result').innerHTML = `The volume of the pyramid is: ${volume.toFixed(2)} cubic units.`;
}
