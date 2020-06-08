/**
 * Generic console logger for errors
 *
 * @param {String} functionName
 * @param {*} params
 * @param {Error} error
 */
function consoleError(functionName, params, error) {
  console.groupCollapsed(
    "%c%s",
    "color: white; background: red; font-size: 12px;",
    `${functionName} - error`,
    "(expand for more)"
  );
  console.log("Function: ", functionName);
  console.log("Params: ", params);
  console.log("Error: ", error);
  console.groupEnd();
}

export default consoleError;
