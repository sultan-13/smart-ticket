function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseInt(element.innerText);
  return value;
}
function setValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
