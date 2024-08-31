// 當網頁window onload時就註冊事件add event listener 
window.addEventListener("load", function(){
    tasks= JSON.parse(localStorage.getItem("data")) || [];
    
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const list_el = document.getElementById("tasks");
    
    form.addEventListener("submit", function(e){ // e: submitEvent
        e.preventDefault(); // stop it from refresh this page
        const task = input.value; // 這樣就能把input.value存在一變數中，因為是從window建立註冊事件才行吧
        if(!task){
            alert("Please fill out the task");
            return;
        };        
// create <div class="task">
        const task_el = document.createElement("div"); // console.dir(task_el); // div
        task_el.classList.add("task");
// create <div class="content">
        const task_content_el = document.createElement("div"); // task_content_el.innerHTML= input.value
        task_content_el.classList.add("content"); 
        
// create <input type="text" class="text" value="input的東西" readonly/>
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");

// create <div class="actions">
        const task_actions_el =document.createElement("div");
        task_actions_el.classList.add("actions");

// create Edit<button>
        const task_edit_el =document.createElement("button");
        task_edit_el.classList.add("edit");

// create Delete<button>
        const task_delete_el =document.createElement("button");
        task_delete_el.classList.add("delete");

        task_input_el.type="text"; // type="text"
        task_input_el.value= task; // const task = input.value
        task_input_el.setAttribute("readonly","readonly"); //設置屬性: 唯獨性 <tag>.setAttribute(qualifiedName| string, value| string)

        task_edit_el.innerHTML = "Edit";
        task_delete_el.innerHTML = "Delete";

        task_el.appendChild(task_content_el); // <div class="task">內有個<div class="content">
        task_content_el.appendChild(task_input_el); // <div class="content"> 內的 <input type="text" class="text" value="Task 1" readonly/>
        task_actions_el.appendChild(task_edit_el); // edit 加到 actions
        task_actions_el.appendChild(task_delete_el); // delete 加到 actions
        task_el.appendChild(task_actions_el); // actions加到 <div calss= "task">
        list_el.appendChild(task_el);

        input.value = ""; // 清空輸入的task <input> 
        task_edit_el.addEventListener("click", (e)=>{ // task_edit_el + 註冊事件 e is button.edit
            // 如果是Edit按鈕 則可以編輯 task_input_el
            if(task_edit_el.innerText.toLowerCase()=="edit"){
                task_input_el.removeAttribute("readonly")  // <input>設置唯獨性給移除
                task_edit_el.focus(); // <tag> element.focus(), sets focus on the specified element, if it can be focused. 
                // press Edit it change the text: Save
                task_edit_el.innerText = "Save"; // the text content of the element and all its children(標籤內的純文字，包括其子標籤的文字,沒有<tag>element)、沒有空格和CSS, 但會顯示<script>或<style>標籤                
               
            }else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText = "Edit";
                               
            }            
        });
        task_delete_el.addEventListener("click", (e)=>{ // task_delete_el.+註冊監聽事件 e is button.delete
            list_el.removeChild(task_el);
        })    
    });  
});
/*
<div class="task">
    <div class="content">
        <input type="text" class="text" value="Task 1" readonly/>
    </div>
    <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>
</div>
*/                   