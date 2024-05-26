const validateArguments = ({ start, end }) => {
  //condition whether start and end are numbers and start<end
  if (isNaN(start) || isNaN(end) || start >= end) {
    throw new Error("Please enter valid start and end values.");
  }
};

module.exports = validateArguments;
