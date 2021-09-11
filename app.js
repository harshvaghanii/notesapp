// Function to display the existing notes in the local storage

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes != null) {
        let outerDiv = document.querySelector(".outer-div");
        notes.forEach((element, index) => {
            let notesDiv = document.createElement("div");
            let note = element;
            let html = `${note}
                            <button type = "submit" id="${index}" onclick = "deleteNote(${index})">Delete Note</button>`;
            notesDiv.setAttribute("class", "notes-div");
            notesDiv.innerHTML = html;
            outerDiv.append(notesDiv);
        });
    }
};
displayNotes();


let btn = document.getElementById("click");

btn.addEventListener("click", () => {
    let outerDiv = document.querySelector(".outer-div");
    let container = document.getElementById("notesBox");
    let user_note = container.value;
    if (user_note != "") {
        container.value = "";
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(user_note);
        localStorage.setItem("notes", JSON.stringify(notesObj));

        let divNote = document.createElement("div");
        let html = ` ${user_note}
                <button id="${notesObj.length - 1}" onclick = "deleteNote(${notesObj.length - 1})">Delete Note</button>`;
        divNote.setAttribute("class", "notes-div");
        divNote.innerHTML = html;
        outerDiv.append(divNote);
    } else {
        alert("Cannot add an empty note!")
    }
});

function deleteNote(index) {
    console.log(`I am deleting note ${index}`);
    let notesArray = JSON.parse(localStorage.getItem("notes"));
    notesArray.splice(index, 1);
    let element_to_remove = document.getElementById(index).parentElement;
    element_to_remove.remove();
    localStorage.setItem("notes", JSON.stringify(notesArray));
    if (notesArray.length == 0) localStorage.clear();
    location.reload();
}