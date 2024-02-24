
// import {list} from "./list"

// function getData(){
     const url = "https://sum-server.100xdevs.com/todos";

//      fetch(url).then(function(resp){
//             resp.json().then(function(finalData){
//                 console.log(finalData);
//             }
//             )
//         })
//     }

    async function getData2(){
       const response = await fetch(url);
       const finalr = await response.json();
       console.log(finalr);
    }

    const list = ["Vedant","Gargi","Pandey"];
    const eve = document.getElementById("click");
    const vlist= document.getElementById("categories");
    eve.addEventListener("click", function(){
      
        getData2();

        
    })

