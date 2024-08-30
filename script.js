const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('unInput');
const pwInput = document.getElementById('pwInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const demo = document.getElementById('demo');


// let j = 20


// function buildDataBase() {
    

    
//     let newNum = Number(localStorage.getItem('number'))
//     let j = newNum
//     j++
//     localStorage.setItem('number',j)
//     console.log(j)
// }




// let j = 0;
// localStorage.setItem('number',j)
 
// let uname;
// let pword;

function buildDataBase() {
    const createUN = document.createElement('td');
    const createPW = document.createElement('td');

    // createUN.textContent = unInput.value;
    // createPW.textContent = pwInput.value;

    // userNameRow.appendChild(createUN);
    // passwordRow.appendChild(createPW);
    
    let newNum = Number(localStorage.getItem('number')); 
     newNum
     let j = newNum;
     j++
     localStorage.setItem(`number`, j )
    
    console.log(j)

    localStorage.setItem(`${j}username`, unInput.value)
    localStorage.setItem(`${j}password`, pwInput.value)


    
    

}




function buildForm(){

    for(let i = 0; i < localStorage.length; i++) {
        let j = localStorage.key(i)
        let localValue = localStorage.getItem(j)
        const createTableData = document.createElement('td')
        createTableData.textContent = localValue


        console.log(localValue)
        if(localStorage.key(i).includes('password')){
            passwordRow.appendChild(createTableData);
        } else if(localStorage.key(i).includes('username')){
            userNameRow.appendChild(createTableData)
        }







    }

    // const createUN = document.createElement('td');
    // const createPW = document.createElement('td');

    // createUN.textContent = unInput.value
    // createPW.textContent = pwInput.value

    // userNameRow.appendChild(createUN)

    // passwordRow.appendChild(createPW)

    // localStorage.setItem('Name', createUN.textContent )
    // localStorage.setItem('Password', createPW.textContent )

    // createUN.textContent = localStorage.getItem('Name')
    // createPW.textContent = localStorage.getItem('Password')

}
buildForm()


submitebtn.addEventListener('click', buildDataBase)





