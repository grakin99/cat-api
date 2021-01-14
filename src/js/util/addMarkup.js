/**
 * @method addMarkupContainer
 * @param data add markup to employee container
 * */

const addMarkupContainer = (wrapper, wrapperClass, elementsArray) => {
  const container = document.createElement(wrapper);
  container.classList.add(wrapperClass);
  elementsArray.forEach((element) => {
    container.append(element);
  });
  return container;
};

export default addMarkupContainer;
