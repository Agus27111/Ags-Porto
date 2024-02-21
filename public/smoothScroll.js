export function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const scrollContainer = document.querySelector(".scrollspy-example");
    const scrollOffset = targetElement.offsetTop - scrollContainer.offsetTop;
    scrollContainer.scrollTop = scrollOffset;
  }
}

// export function smoothScroll(e) {
//   e.preventDefault();
//   const targetId = e.currentTarget.getAttribute('href').slice(1);
//   const targetElement = document.getElementById(targetId);
//   if (targetElement) {
//     const offset = targetElement.offsetTop;
//     window.scrollTo({
//       top: offset,
//       behavior: 'smooth'
//     });
//   }
// }
