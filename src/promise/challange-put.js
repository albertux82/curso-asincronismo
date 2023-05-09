import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

/**
 * Actualiza un producto enviando su id
 */
function updateData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "Motorola X-ASF (NEW UPDATE)",
  price: 123,
};

updateData(`${API}/products/230`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
