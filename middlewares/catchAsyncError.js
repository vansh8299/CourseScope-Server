//By making this file we avoid writing try/catch everytime

export const catchAsyncError = (passedFunction) => (req, res, next) => {
  Promise.resolve(passedFunction(req, res, next)).catch(next); // in this next is redirecting to custom error handle
};
