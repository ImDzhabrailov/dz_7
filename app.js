async function loadUser() {
    const userInfo = document.getElementById("user-info");
    // userInfo.innerHTML = ""; //Для очистки Предыдущих данных
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        if (!response.ok) {
            throw new Error("Не канает");
        }
        const user = await response.json();
        displayUserInfo(user);
    } catch (error) {
        console.error("Ошибка: ", error);
        displayError("Ошибка при загрузке пользователя");
    }
}
function displayUserInfo(user) {
    const userInfo = document.getElementById("user-info");

    const listItemName = document.createElement("li");
    listItemName.textContent = (user.name);
    userInfo.appendChild(listItemName);
    listItemName.style.marginTop = "5px";

    const listItemEmail = document.createElement("li");
    listItemEmail.textContent = (user.email);
    userInfo.appendChild(listItemEmail);
    listItemEmail.style.cursor = "pointer";
    listItemEmail.style.color = "blue";
}
document.getElementById("load-user").addEventListener("click", loadUser);