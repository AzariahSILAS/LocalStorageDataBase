const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('unInput');
const pwInput = document.getElementById('pwInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const demo = document.getElementById('demo');



localStorage.setItem('car','dodge')


function Storage() {
    localStorage.setItem(unInput.value, pwInput.value)

}

function buildDataBase() {
    const createUN = document.createElement('td');
    const createPW = document.createElement('td');

    createUN.textContent = unInput.value;
    createPW.textContent = pwInput.value;

    userNameRow.appendChild(createUN);
    passwordRow.appendChild(createPW);
    
    let i = 0;
    i++
    console.log(i)

    localStorage.setItem('username', unInput.value)
    localStorage.setItem('password', pwInput.value)
}




// function buildForm(){
//     const createUN = document.createElement('td');
//     const createPW = document.createElement('td');

//     createUN.textContent = unInput.value
//     createPW.textContent = pwInput.value

//     userNameRow.appendChild(createUN)

//     passwordRow.appendChild(createPW)

//     localStorage.setItem('Name', createUN.textContent )
//     localStorage.setItem('Password', createPW.textContent )

//     createUN.textContent = localStorage.getItem('Name')
//     createPW.textContent = localStorage.getItem('Password')



// }



submitebtn.addEventListener('click', buildDataBase)


// function submit() {
//   const h2 = document.createElement('h2');  
//   let textCnt;  
//   textCnt = unInput.value;
  
//   localStorage.setItem('text', textCnt)
//   h2.textContent = localStorage.getItem('text')
//   demo.appendChild(h2)
// }



