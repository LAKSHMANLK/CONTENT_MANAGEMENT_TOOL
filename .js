document.addEventListener("DOMContentLoaded", function() {
    const contentList = document.getElementById("content-list");
    const newContentInput = document.getElementById("new-content");
    const editContentInput = document.getElementById("edit-content");

    function createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    document.getElementById("add-content").addEventListener("click", function() {
        const text = newContentInput.value;
        if (text) {
            contentList.appendChild(createListItem(text));
            newContentInput.value = "";
        }
    });

    document.getElementById("edit-button").addEventListener("click", function() {
        const text = editContentInput.value;
        if (text) {
            const selectedLi = contentList.querySelector(".selected");
            if (selectedLi) {
                selectedLi.textContent = text;
                editContentInput.value = "";
                selectedLi.classList.remove("selected");
            }
        }
    });

    document.getElementById("delete-content").addEventListener("click", function() {
        const selectedLi = contentList.querySelector(".selected");
        if (selectedLi) {
            contentList.removeChild(selectedLi);
            editContentInput.value = "";
        }
    });

    contentList.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "LI") {
            const selectedLi = contentList.querySelector(".selected");
            if (selectedLi) {
                selectedLi.classList.remove("selected");
            }
            target.classList.add("selected");
            editContentInput.value = target.textContent;
        }
    });
});

