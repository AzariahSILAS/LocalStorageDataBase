const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('usernameInput');
const pwInput = document.getElementById('passwordInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const table = document.getElementById('table')







// submitebtn.addEventListener('click', buildDataBase)

function buildRow() {
    arr = []
    for(i=0;i<2;i++){
        const newRow = document.createElement('tr'); 
        const newtd = document.createElement('th'); 
        arr.push(newRow)
        arr.push(newtd)
    }
    const firstrow = arr[0]
    const username = arr[1]
    const secondrow = arr[2]
    const password = arr[3]
    username.textContent = 'username'
    password.textContent = 'password'
    table.appendChild(firstrow)
    firstrow.appendChild(username)
    table.appendChild(secondrow)
    secondrow.appendChild(password)

    console.log(arr)
    
    
}
buildRow()





