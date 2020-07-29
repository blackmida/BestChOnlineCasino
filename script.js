let hostNameSpan = document.querySelectorAll('.hostNameSpan');
let updatedDate = document.querySelector('#updatedDateSpan');

let date = new Date();

hostNameSpan.forEach(span => {
    span.innerHTML = window.location.hostname;
})

window.onload = () => {
    // updatedDate.innerHTML = date.toDateString();
    // updatedDate.innerHTML = date.toDateString().split(' ').slice(1).join(' ');
    updatedDate.innerHTML = date.toLocaleDateString('en-GB');
  };