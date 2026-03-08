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

// 3. linkToActivity(n.payload) — /user/index activity notifications
function fixActivityNotifications() {

  document.querySelectorAll("a[ng-click='linkToActivity(n.payload)']").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (scope?.n?.payload) {
      const { course_id, activity_id } = scope.n.payload;
      el.setAttribute("href", `/course/${course_id}/learning-activity#/${activity_id}`);
    }
  });

}

// 4. linkToTeachingUnit(n.payload) — /user/index blog type link activity
function fixTeachingUnitLinks() {

  document.querySelectorAll("a[ng-click='linkToTeachingUnit(n.payload)']").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (scope?.n?.payload) {
      const { course_id } = scope.n.payload;
      el.setAttribute("href", `/course/${course_id}/content#/`);
    }
  });

}

// 5. a.title in /course/.../content _ content page
function fixContentActivityLinks() {

  document.querySelectorAll("a.title[ng-bind='activity.title']").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (scope?.activity) {
      const { course_id, id } = scope.activity;
      el.setAttribute("href", `/course/${course_id}/learning-activity#/${id}`);
    }
  });

}

// 6. openActivity(homework, false) in <a> _ /course/.../homework
// 7. openActivity(homework, false) in <div> — add title with <a> _ /course/.../homework
function fixHomeworkLinks() {

  document.querySelectorAll("a[ng-click='openActivity(homework, false)']").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (scope?.homework) {
      const { teaching_unit_id, id } = scope.homework;
      el.setAttribute("href", `/course/${teaching_unit_id}/learning-activity#/${id}`);
    }
  });

  document.querySelectorAll("div[ng-click='openActivity(homework, false)']").forEach(el => {
    const scope = angular.element(el).scope();
    if (!scope?.homework) return;
    const { teaching_unit_id, id } = scope.homework;
    const url = `/course/${teaching_unit_id}/learning-activity#/${id}`;
    const titleSpan = el.querySelector(".shorten-title");
    if (!titleSpan || titleSpan.parentElement.tagName === "A") return;
    const a = document.createElement("a");
    a.href = url;
    titleSpan.parentNode.insertBefore(a, titleSpan);
    a.appendChild(titleSpan);
  });

}


// 8. openActivity(exam, false, 'exam') — /course/.../exam _ exam list
function fixExamLinks() {

  document.querySelectorAll("a[ng-click=\"openActivity(exam, false, 'exam')\"]").forEach(el => {
    if (el.getAttribute("href")) return;
    const scope = angular.element(el).scope();
    if (!scope?.exam) return;
    const courseId = window.location.pathname.split("/")[2];
    el.setAttribute("href", `/course/${courseId}/learning-activity#/exam/${scope.exam.id}`);
  });

}

function fixLinks() {
  fixTodoLinks();
  fixHomeworkNotifications();
  fixActivityNotifications();
  fixTeachingUnitLinks();
  fixContentActivityLinks();
  fixHomeworkLinks();
  fixExamLinks();
}

const observer = new MutationObserver(fixLinks);
observer.observe(document.body, { childList: true, subtree: true });
fixLinks();
