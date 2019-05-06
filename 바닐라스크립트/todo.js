const todoform=document.querySelector(".js_todoform"),
	todoinput=todoform.querySelector('input');
	todolist=document.querySelector(".js_todolist");
const TODOS_JS= "todos";
let toDos=[];

function saveToDos(){
	localStorage.setItem(TODOS_JS, JSON.stringify(toDos));
}

function deleteToDo(event){
	const btn= event.target;
	const li= btn.parentNode;
	todolist.removeChild(li);
	const cleantodos=toDos.filter(function(todo){
		return (todo.id!==parseInt(li.id));
	});
	toDos=cleantodos;
		saveToDos();
}

function paintToDo(text){
	const li=document.createElement("li");
	const delBtn= document.createElement("button");
	delBtn.innerText="check";
	delBtn.addEventListener("click",deleteToDo);
	const span=document.createElement("span");
	const newId=toDos.length + 1;
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id=newId;
	todolist.appendChild(li);
	const todoobj={
		text: text,
		id: newId
	};
	toDos.push(todoobj);
	saveToDos();

}	

function handleSubmit(event){
	event.preventDefault();
	const currentValue= todoinput.value;
	paintToDo(currentValue);
	todoinput.value="";
}

function loadtodos(){
	const loadedtoDos= localStorage.getItem(TODOS_JS);
	if(loadedtoDos!==null){
		const parsedtoDos= JSON.parse(loadedtoDos);
		parsedtoDos.forEach(function(todo){
			paintToDo(todo.text);
		})
	}
}

function init(){
	loadtodos();
	todoform.addEventListener("submit", handleSubmit );
}

init();