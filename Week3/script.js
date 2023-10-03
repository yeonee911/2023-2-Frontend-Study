document.addEventListener('DOMContentLoaded', function () {

    const inputText = document.getElementById('input-text');
    const inputButton = document.getElementById('input-button');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    function addDoneList(item) {
        todoList.removeChild(item);
        doneList.appendChild(item);
    }

    function addTodoList(item) {
        doneList.removeChild(item);
        todoList.appendChild(item);
    }


    inputButton.addEventListener('click', function (event) {

        event.preventDefault(); // 페이지 새로고침 방지

        const taskText = inputText.value.trim();

        if (taskText !== '') {

            const newItem = document.createElement('li');
            newItem.textContent = taskText;
            newItem.classList.add('text-button');

            newItem.addEventListener('click', function () {
                addDoneList(newItem);
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '🧹';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function () {
                newItem.parentElement.removeChild(newItem);
            });

            newItem.appendChild(deleteButton);  //삭제버튼 생성
            todoList.appendChild(newItem);  //리스트 추가

            inputText.value = ''; //입력창 초기화
        }
    });


    doneList.addEventListener('click', function (event) {
        const clickedItem = event.target;

        if (clickedItem.tagName === 'BUTTON' && clickedItem.innerHTML === '🧹') {
            doneList.removeChild(clickedItem.parentElement);
        }
        else {
            addTodoList(clickedItem);
        }
    });
});
