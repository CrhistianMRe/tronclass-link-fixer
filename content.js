function fixLinks() {
}

const observer = new MutationObserver(fixLinks);
observer.observe(document.body, { childList: true, subtree: true });
fixLinks();
