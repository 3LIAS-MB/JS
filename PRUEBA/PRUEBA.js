const background = 'yellow';
const color = 'red';
const isAuthorized = true;

const button = document.createElement("button");
button.innerText = "click me";
button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color}`; 

button.addEventListener("click", () => {
    if(isAuthorized) {
        return alert("Está autorizado")
    }
    alert("No está aurotizado")
})

document.body.append(button);