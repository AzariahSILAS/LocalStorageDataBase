const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('unInput');
const pwInput = document.getElementById('pwInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const demo = document.getElementById('demo');



function buildDataBase() {
    const createUN = document.createElement('td');
    const createPW = document.createElement('td');

    
    let newNum = Number(localStorage.getItem('number')); 
     let j = newNum;
     j++
     localStorage.setItem(`number`, j )
 
    localStorage.setItem(`${j}username`, unInput.value)
    localStorage.setItem(`${j}password`, pwInput.value)

    window.location.reload()
 

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

}
buildForm()


submitebtn.addEventListener('click', buildDataBase)





