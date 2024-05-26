const handleError = (error) => {
  //if there is any error comes it will be shown to user in terminal itself
  console.error("Error:", error);
  process.exit(1);
};

module.exports = handleError;
