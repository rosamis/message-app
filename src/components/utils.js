export const formatDate = (date) => {
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

export const formatHour = (date) => {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (hours.length == 1) {
    hours = "0" + hours.toString();
  }
  if (minutes.length == 1) {
    minutes = "0" + minutes.toString();
  }
  return hours + ":" + minutes;
};
