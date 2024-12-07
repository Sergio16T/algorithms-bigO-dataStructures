/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait = 0) {
  let timeoutID = null;
  return function (...args) {
    // Keep a reference to `this` so that
    // func.apply() can access it.
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      timeoutID = null; // Not strictly necessary but good to do this.
      func.apply(context, args);
    }, wait);
  };
}




/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function _debounce(func, wait = 0) {
  let timeoutId = null;
  let context = undefined;
  let argsToInvoke = undefined;

  function clearTimer() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  function invoke() {
    // Don't invoke if there's no pending callback.
    if (timeoutId == null) {
      return;
    }

    clearTimer();
    func.apply(context, argsToInvoke);
  }

  function fn(...args) {
    clearTimer();
    argsToInvoke = args;
    context = this;
    timeoutId = setTimeout(function () {
      invoke();
    }, wait);
  }

  fn.cancel = clearTimer;
  fn.flush = invoke;
  return fn;
}
