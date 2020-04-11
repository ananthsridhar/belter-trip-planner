export function addTrip(name) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  };
  return fetch('http://localhost:8080/api/trips/add', requestOptions)
    .then(response => response.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      return res;
    })
    .catch(e => console.log(e));
}
