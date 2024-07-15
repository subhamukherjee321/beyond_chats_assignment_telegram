function formatDate(dateString) {
  // Parse the date string
  const date = new Date(dateString);

  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get the month and date
  const month = monthNames[date.getMonth()]; // getMonth() returns 0-11
  const day = date.getDate(); // getDate() returns 1-31

  // Format the date
  return `${month} ${day}`;
}

export default formatDate;