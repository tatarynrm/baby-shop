export const sucessfulLookup = (position, setUserLocation) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?${latitude}&${longitude}&localityLanguage=en`
  )
    .then((response) => response.json())
    .then((data) => {
      const preData = [];
      preData.push(data);
      setUserLocation(preData);
    });
};
