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


function fixLinks() {
  fixTodoLinks();
}

const observer = new MutationObserver(fixLinks);
observer.observe(document.body, { childList: true, subtree: true });
fixLinks();
