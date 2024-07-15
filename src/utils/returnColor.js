const randomColor = (index) => {
  const colors = ["#faa24b", "#54a4ed", "#a588f3", "#40ddc8"];
  return colors[index % colors.length];
};

export default randomColor;
