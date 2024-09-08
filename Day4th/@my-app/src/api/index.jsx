const baseUrl =
  "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0c6b87ab24dbfe39c9367fe68b8e24ef}";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&api=yes`);
  return await response.json();
};
