<div align="center">
  <img src="logo.png"  alt="icon" width="160" height="160"/>
  <h1 align="center">Tronclass Link Fixer</h1>
  <h4 align="center">Proper hyperlinks for Tronclass</h4>
</div>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="AngularJS" src="https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white"/>
  <img alt="GitHub Actions" src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"/>
</p>

## ℹ️ About
TronClass doesn't let you open assignments and activities in a new tab. This extension fixes that by adding real links, so you can right-click, middle-click, or copy the URL like any normal link

> [!NOTE]
> Currently, it only works in TKU domain.

> [!IMPORTANT]
> Any file like .pdf, ppt, etc.. is not fixed with this extension.

### 📢 Where does it work?:
- User index page
- Course content page
- Course homework page
- Exam list page (not in the exam)

### 💡 How does it work?
<details>
<summary>Details</summary>

TronClass uses AngularJS to navigate between pages with JavaScript instead of real links. 
This means elements like assignments and activities don't have an `href` attribute, 
so the browser doesn't treat them as real links.

This extension reads the activity data directly from Angular's scope and injects a real 
`href` into each element, without breaking the original click behavior.

</details>

## Installation

- Not added yet
