
//2
const options = {
    root:null,
    // rootMargin:'300px'
};
//1
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el=>{
        el.target.classList.toggle('active',el.isIntersecting)
        console.log(entries)
  })
}, options);
//1
const content = document.querySelectorAll(".scroll");
console.log(content)
content.forEach((content) => {
  observer.observe(content);
});
