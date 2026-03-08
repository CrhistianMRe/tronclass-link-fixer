// 1. openActivity(todoData) — /user/index homework home
function fixTodoLinks() {

  document.querySelectorAll("a[ng-click='openActivity(todoData)']").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (scope?.todoData?.url) {
      el.setAttribute("href", scope.todoData.url);
    }
  });

}

// 2. linkToHomeworkActivity(n.payload) — /user/index notifications
function fixHomeworkNotifications() {

  document.querySelectorAll("a[ng-click='linkToHomeworkActivity(n.payload)']").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (scope?.n?.payload) {
      const { course_id, homework_id } = scope.n.payload;
      el.setAttribute("href", `/course/${course_id}/learning-activity#/${homework_id}`);
    }
  });

}

function fixLinks() {
  fixTodoLinks();
  fixHomeworkNotifications();
}

const observer = new MutationObserver(fixLinks);
observer.observe(document.body, { childList: true, subtree: true });
fixLinks();
