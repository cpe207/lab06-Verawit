// const axios = require("axios");
//วีรวิชญ์ ยิ่งศิริธัญรัฐ 660612157
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  
  try {
    let todoresponse = await axios.get("https://jsonplaceholder.typicode.com/todos/"+todoId)
    let responses =  await axios.get("https://jsonplaceholder.typicode.com/users/"+todoresponse.data.userId )
    return {owner:responses.data.name,title:todoresponse.data.title,completed:todoresponse.data.completed}
    
  } catch (error) {
     return "INVALID TODO ID"
  }

  
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
