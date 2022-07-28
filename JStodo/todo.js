let value = window.prompt("WHAT WOULD YOU LIKE TO DO?");
const todo = [];
while(value !== "quit")
{
     if(value === "list")
    {
        console.log("********");
        for(let i=0; i<todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("********");
    }
    else if(value === "new")
    {
        const todovalue = prompt("ENTER THE TASK");
        todo.push(todovalue);
        console.log(`${todovalue} added to the list`);
    }
    
    else if(value === "delete")
    {
       const delitem = parseInt(prompt("ENTER THE INDEX TO DELETE THE SPECIFIC TASK"));
        todo.splice(delitem,1);
        console.log("TASK REMOVED");
    }
    value = window.prompt("WHAT WOULD YOU LIKE TO DO?");
}
console.log("QUITING THE APP");