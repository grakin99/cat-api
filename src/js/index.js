import { httpGetRequest } from "./util/fetch-data.js";
import { employeeView } from "./views/employee.js";
import createElementFromTemplate from "./util/createElementFromTemplate.js";
import markupContainer from "./util/addMarkup.js";
window.addEventListener("load", () => {
  /**
   * Modal
   * view
   * template literal string of markup
   * convert the template to a dom node
   * seed the template with data
   * wrap the data in container
   * append the container to the DOM
   */
  httpGetRequest("https://reqres.in/api/users").then((result) => {
    const templates = employeeView(result.data);
    const markup = createElementFromTemplate(templates);
    const employees = markupContainer("div", "person", markup);
    document.querySelector(".display").append(employees);
  });
});
