// const axios = require("axios");
//วีรวิชญ์ ยิ่งศิริธัญรัฐ 660612157
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  try {
    let response =  await axios.get("https://jsonplaceholder.typicode.com/users/"+userId)
  return  response.data.name 
  } catch (error) {
    return "INVALID USER ID"
  }
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;
