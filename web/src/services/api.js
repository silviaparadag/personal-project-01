const getCitiesApi = async () => {
  const fetchApi = await fetch ('http://localhost:4000/cities');
  const dataJson = await fetchApi.json();
  return dataJson.results;
}

const sendToApi = (data) => {
  return fetch('http://localhost:4000/cities', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = { sendToApi:sendToApi, getCitiesApi:getCitiesApi};

export default objToExport;
