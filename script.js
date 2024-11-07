document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTaskButton");
    const modal = document.getElementById("taskModal");
    const closeButton = document.querySelector(".close");


    addTaskButton.onclick = function () {
        modal.style.display = "block";
    };


    closeButton.onclick = function () {
        modal.style.display = "none";
    };


    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Set current date
    const dateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);


const data = { task: 'My Task' };
localStorage.setItem('taskData', JSON.stringify(data));


const storedData = JSON.parse(localStorage.getItem('taskData'));



});