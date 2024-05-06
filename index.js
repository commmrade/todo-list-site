const ListOl = document.getElementById("heh")
const inputBox = document.getElementById("inp")

function AddEl()
{
    let li = document.createElement("li")
    li.textContent = inputBox.value
    li.setAttribute("title", "Remove task")
    ListOl.appendChild(li);
}

ListOl.addEventListener("click", (envt) =>
{
    if(envt.target.tagName === "LI")
    {
        envt.target.remove();
    }
});