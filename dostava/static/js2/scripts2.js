const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".navbar ");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Poruka je poslata!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Poruka nije poslata"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Poruka nije poslata"
      });
    }
    form.addEventListener("submit", handleSubmit)