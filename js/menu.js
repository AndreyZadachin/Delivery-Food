const renderItems = (data) => {
  data.forEach((element) => {
    console.log(element);
  });
};
const restourant = "food-band";

fetch(`./db/${restourant}.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  });
