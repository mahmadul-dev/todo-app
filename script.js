const taskInput = document.getElementById("task-input")
    const taskContainer = document.getElementById("task-container")

    function addTask() {
      if (taskInput.value === "") {
        alert("Please type your task")
      }
      else {
        let li = document.createElement("li")
        li.innerHTML = taskInput.value
        taskContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
      }
      taskInput.value = ""
      saveData()
    }
    
    taskContainer.addEventListener("click", function (e){
      if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
      }
      else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
      }

    }, false);

    function saveData(){
      localStorage.setItem("data", taskContainer.innerHTML);
    }
    function showData(){
      taskContainer.innerHTML = localStorage.getItem("data");
    }
    showData()




    // const taskInput = document.getElementById("task-input");
    // const taskContainer = document.getElementById("task-container");

    // function addTask() {
    //   if (taskInput.value === "") {
    //     alert("Please, Type your task!")
    //     saveTask()
    //   }
    //   else {
    //     let taskItem = document.createElement("li")
    //     taskItem.innerHTML = taskInput.value
    //     taskContainer.appendChild(taskItem)
    //     saveTask()
    //     let remove = document.createElement("span")
    //     remove.innerHTML = "\u00d7"
    //     taskContainer.appendChild(remove)
    //     saveTask()
    //   }
    //   taskInput.value = ""
    //   saveTask()
    // }
    // function saveTask() {
    //   localStorage.setItem("data", taskContainer.innerHTML);
    // }
    // taskContainer.addEventListener("click", function (e) {

    //   if (e.target.tagName === "LI") {
    //     e.target.classList.toggle("checked");
    //     saveData();
    //   }
    //   else if (e.target.tagName === "SPAN") {
    //     e.target.parentElement.remove();
    //     saveData();
    //   }
    // }
    // ), false;

  
