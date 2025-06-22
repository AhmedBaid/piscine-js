const letterSpaceNumber = (test) => {
  let regex = /[a-zA-Z][ ][\d](?!\w)/g;
  return test.match(regex) || [];
};
