const getTwoLetterName = (name) => {
  const nameArr = name?.split(" ");
  const firstLetter = nameArr?.[0]?.[0];
  const secondLetter = nameArr?.[1]?.[0];
  if (firstLetter && secondLetter) {
    return firstLetter + secondLetter;
  } else if (firstLetter) {
    return firstLetter;
  } else {
    return "U";
  }
};

export default getTwoLetterName;
