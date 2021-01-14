/***
 * @method createElementFromTemplate
 * @param array of template literals as valid markup
 * */

const createElementFromTemplate = (template = []) => {
  let elements;
  if (template.length === 0) {
    throw new Error("you must add array of template literals as valid markup");
  }
  elements = template.map((templateLiteral, index) => {
    const element = document
      .createRange()
      .createContextualFragment(templateLiteral).children[0];
    return element;
  });
  return elements;
};

export default createElementFromTemplate;
