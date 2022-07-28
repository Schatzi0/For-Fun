let value = prompt("WHAT WOULD YOU LIKE TO DO?");
const todo = [];
while(value !=="quit"|| value !=="q")
{
    if(value === "new")
    {
        todovalue = prompt("ENTER THE TASK");
        todo.push(todovalue);
        console.log(`${todovalue} added to the list`);
    }

    else if(value === "list")
    {
        for(let i=0; i<todo.length; i++){
            console.log("********");
            console.log(`${i}: ${todo[i]}`);
            console.log("********");
        }
    }
    else if(value === "delete")
    {
        delitem = prompt("ENTER THE INDEX TO DELETE THE SPECIFIC TASK");
        todo.splice(delitem,1);
        console.log("TASK REMOVED");
    }
}
console.log("QUITING THE APP");