// const todoList = document.getElementById("task");
const todoLists = document.getElementById("tasks");
const todoCompletedLists = document.getElementById("completed-list");
// const todoInput = document.getElementById("todoInput").value;
const todoTemplate = (todoTitle, todoId) => `
<input class="hidden" type="checkbox" id=${todoId} value=${todoTitle}>
                    <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100" for=${todoId}>
                        <span
                            class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span id="completed-task" class="ml-4 text-sm">${todoTitle}</span>
                    </label>
  `;
// const todoCompletedTemplate = (todoTitle, todoId) =>
//     `<input class="hidden" type="checkbox" id=${todoId} value=${todoTitle} checked>
//     <label id="completed-list"
//         class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
//         for=${todoId}>
//         <span
//             class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
//             <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
//                 fill="currentColor">
//                 <path fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd" />
//             </svg>
//         </span>
//         <span class="ml-4 text-sm">${todoTitle}</span>
//     </label>`;
const todoInput = document.getElementById("todoInput").value;
const todoId = todoInput.split(" ").join("");
const newTodo = () => {
    const todoInput = document.getElementById("todoInput").value;
    const todoId = todoInput.split(" ").join("");
    console.log(todoInput);
    if (todoInput.length == 0) {
        alert("no input");
    } else {
        todoLists.insertAdjacentHTML(
            "beforeend",
            todoTemplate(todoInput, todoId)
        );
    }
    var selections = {};
    var checkboxElems = document.querySelectorAll("input[type='checkbox']");
    console.log("checkboxElems", checkboxElems);
    var totalElem = document.getElementById("seats-total");
    var seatsElem = document.getElementById("completed-list");
    var selections = {};
    var checkboxElems = document.querySelectorAll("input[type='checkbox']");
    var totalElem = document.getElementById("seats-total");
    // var seatsElem = document.getElementById("selected-seats");

    for (var i = 0; i < checkboxElems.length; i++) {
        checkboxElems[i].addEventListener("click", displayCheck);
    }

    function displayCheck(e) {
        if (e.target.checked) {
            selections[e.target.id] = {
                name: e.target.name,
                value: e.target.value,
            };
        } else {
            delete selections[e.target.id];
        }

        var result = [];
        var total = 0;

        for (var key in selections) {
            var listItem =
                "<li>" +
                selections[key].name +
                " " +
                selections[key].value +
                "</li>";
            result.push(listItem);
            total += parseInt(selections[key].value.substring(1));
        }

        totalElem.innerText = total;
        seatsElem.innerHTML = result.join("");
    }
};

// var myCheck = document.getElementById("myCheck");
