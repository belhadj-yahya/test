
// const inputElement = document.querySelector(".search");
// const table = document.querySelector(".b1")
// const table2 = document.querySelector(".b2")
// const table3 = document.querySelector(".b3")

// const manyToShow = document.querySelector("#choose")
// let value = manyToShow.value;
// let dataToDisplay;
// let cont;
// let objectValue = "";
// let arrayValue = "";
// let change = false
// let btn1 = document.querySelector("#b1")
// let btn2 = document.querySelector("#b2")
// let btn3 = document.querySelector("#b3")

//     fetch("data.json")
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         manyToShow.addEventListener("change",function(e){
//             value = e.target.value
//             if(change === false){
//                 if(value === 5){
//                     table.innerHTML = ""
//                     startTable(5,data)
//                     table2.innerHTML = ""
//                     startTable(10,data)
//                     table3.innerHTML = ""
//                     startTable(15,data)
//                 }else if(value === 10){

//                 }
//             }else{
//                 table.innerHTML = ""
//                 searchedTable(value,dataToDisplay)
//             }
//         })
//         inputElement.addEventListener("input", function(event) {
//           table.innerHTML = ""
//           change = true
//             const inputValue = event.target.value.toLowerCase(); 
//             dataToDisplay = data.filter(e => {
//                 if(e.id.toString().toLowerCase().includes(inputValue) || e.name.toLowerCase().includes(inputValue) ||e.department.toLowerCase().includes(inputValue) ||e.age.toString().toLowerCase().includes(inputValue) ||e.isActive.toString().toLowerCase().includes(inputValue)) {
//                     return e
//                 } else {
//                        for (let i = 0; i < e.skills.length; i++) {
//                             if (e.skills[i].toLowerCase().includes(inputValue)) {
//                               return e
//                             }
//                        }
//                        for (const key in e.address) {
//                             if (e.address[key].toLowerCase().includes(inputValue)) {
//                               return e
//                             }
//                         }
//                 }
//             });
//     //setting the data to be in the table
//             searchedTable(dataToDisplay.length,dataToDisplay)
//         });
//     })

//     function searchedTable(value,dataToDisplay){
//         for (let i = 0; i < value; i++) {
//             cont = 
//             `
//             <td>${dataToDisplay[i].id}</td>
//             <td>${dataToDisplay[i].name}</td>
//             <td>${dataToDisplay[i].department}</td>
//             <td>${dataToDisplay[i].age}</td>
//             <td>${dataToDisplay[i].isActive}</td>
//             `
//             arrayValue = ""; 
//             for (let j = 0; j < dataToDisplay[i].skills.length; j++) {
//                 arrayValue += `<p>${dataToDisplay[i].skills[j]}</p>`
//             }
//             cont += `<td>${arrayValue}</td>`
//             objectValue = ""; 
//             for (const key in dataToDisplay[i].address) {
//                 objectValue += `<p>${dataToDisplay[i].address[key]}</p>`
//             }

//             cont += `<td>${objectValue}</td>`
//             table.innerHTML += cont
//         }
//     }

//     function startTable(value,data){
//         for (let i = 0; i < value; i++) {
//             cont = 
//             `
//             <td>${data[i].id}</td>
//             <td>${data[i].name}</td>
//             <td>${data[i].department}</td>
//             <td>${data[i].age}</td>
//             <td>${data[i].isActive}</td>
//             `
//             arrayValue = ""; 
            
//             for (let j = 0; j < data[i].skills.length; j++) {
//                 arrayValue += `<p>${data[i].skills[j]}</p>`
//             }
//             cont += `<td>${arrayValue}</td>`
//             objectValue = ""; 
//             for (const key in data[i].address) {
//                 objectValue += `<p>${data[i].address[key]}</p>`
//             }
//             cont += `<td>${objectValue}</td>`
//             table.innerHTML += cont
//        } 
//     }


console.log(Math.ceil(22 / 5))
const inputElement = document.querySelector(".search");
const table = document.querySelector(".b1")
const table2 = document.querySelector(".b2")
const table3 = document.querySelector(".b3")

const manyToShow = document.querySelector("#choose")
let value = manyToShow.value;
let dataToDisplay;
let cont;
let objectValue = "";
let arrayValue = "";
let change = false
let btn1 = document.querySelector("#b1")
let btn2 = document.querySelector("#b2")
let btn3 = document.querySelector("#b3")

    fetch("data.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        manyToShow.addEventListener("change",function(e){
            value = e.target.value
            if(change === false){
                for(let i = 0;i < value;i++){

                }               
            }else{
                table.innerHTML = ""
                searchedTable(value,dataToDisplay)
            }
        })
        inputElement.addEventListener("input", function(event) {
          table.innerHTML = ""
          change = true
            const inputValue = event.target.value.toLowerCase(); 
            dataToDisplay = data.filter(e => {
                if(e.id.toString().toLowerCase().includes(inputValue) || e.name.toLowerCase().includes(inputValue) ||e.department.toLowerCase().includes(inputValue) ||e.age.toString().toLowerCase().includes(inputValue) ||e.isActive.toString().toLowerCase().includes(inputValue)) {
                    return e
                } else {
                       for (let i = 0; i < e.skills.length; i++) {
                            if (e.skills[i].toLowerCase().includes(inputValue)) {
                              return e
                            }
                       }
                       for (const key in e.address) {
                            if (e.address[key].toLowerCase().includes(inputValue)) {
                              return e
                            }
                        }
                }
            });
    //setting the data to be in the table
            searchedTable(dataToDisplay.length,dataToDisplay)
        });
    })

    function searchedTable(value,dataToDisplay){
        for (let i = 0; i < value; i++) {
            cont = 
            `
            <td>${dataToDisplay[i].id}</td>
            <td>${dataToDisplay[i].name}</td>
            <td>${dataToDisplay[i].department}</td>
            <td>${dataToDisplay[i].age}</td>
            <td>${dataToDisplay[i].isActive}</td>
            `
            arrayValue = ""; 
            for (let j = 0; j < dataToDisplay[i].skills.length; j++) {
                arrayValue += `<p>${dataToDisplay[i].skills[j]}</p>`
            }
            cont += `<td>${arrayValue}</td>`
            objectValue = ""; 
            for (const key in dataToDisplay[i].address) {
                objectValue += `<p>${dataToDisplay[i].address[key]}</p>`
            }

            cont += `<td>${objectValue}</td>`
            table.innerHTML += cont
        }
    }

    function startTable(value,data){
        for (let i = 0; i < value; i++) {
            cont = 
            `
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].department}</td>
            <td>${data[i].age}</td>
            <td>${data[i].isActive}</td>
            `
            arrayValue = ""; 
            
            for (let j = 0; j < data[i].skills.length; j++) {
                arrayValue += `<p>${data[i].skills[j]}</p>`
            }
            cont += `<td>${arrayValue}</td>`
            objectValue = ""; 
            for (const key in data[i].address) {
                objectValue += `<p>${data[i].address[key]}</p>`
            }
            cont += `<td>${objectValue}</td>`
            table.innerHTML += cont
       } 
    }
