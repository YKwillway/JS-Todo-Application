import "./style.css";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompleteTodo(inputText);
}

const createIncompleteTodo = (todo) => {
    const li = document.createElement("li");
    
    const div = document.createElement("div");
    div.className = "list-row";
    li.appendChild(div);
    
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;
    
    div.appendChild(p);

    const completeButton = createCopleteButton();
    div.appendChild(completeButton);

    const deleteButton = createDeleteButton();
    div.appendChild(deleteButton);
    
    document.getElementById("todo-incomplete-list").appendChild(li)

};

function createCopleteButton() {
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton);
        document.getElementById("todo-complete-list").appendChild(moveTarget);
        backButton.addEventListener("click", () => {
            const backTargetName = backButton.previousElementSibling.innerText;
            backButton.closest("li").remove();
            createIncompleteTodo(backTargetName);
        });
    });
    return completeButton;
}

function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("todo-incomplete-list").removeChild(deleteTarget);
    });
    return deleteButton;
}
document.getElementById("add-button").addEventListener("click", onClickAdd);