export const getCurrentPosition = async ({ latitude, longitude }) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;
  try {
    const response = await fetch(urlPosition);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
