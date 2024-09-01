const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('usernameInput');
const pwInput = document.getElementById('passwordInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const table = document.getElementById('table');
const outputBox = document.getElementById('outputBox')







// submitebtn.addEventListener('click', buildRow)

// function buildRow() {
//     // let index = localStorage.getItem('number')
//     // index++
//     //---------
//     // localStorage.setItem(`${index}username`,unInput.value);
//     // localStorage.setItem(`${index}password`,pwInput.value);
//     //-------
//     // localStorage.setItem('number',index)

//     // const creatun = document.createElement('td')
//     // const creatpw = document.createElement('td')
//     // creatun.textContent = unInput.value
//     // creatpw .textContent = pwInput.value
//     // userNameRow.appendChild(creatun)
//     // passwordRow.appendChild(creatpw)

// }
function loadTable() {
    // let arr = ['azzie', 'Amy', 'Ivey', 'Abe', 'Ajay', 'Anna','And More'];
    let unsortedUsernames = [];
    let usernames = [];
    let unsortedPasswords = [];
    let passwords = [];
    for(i=0; i < localStorage.length; i++) {
        // console.log(arr[i])
        // const creatText = document.createElement('h2')
        // creatText.textContent = arr[i]
        // outputBox.appendChild(creatText)
        // let unsortedUsernames = [];
        // let usernames = []
        // let unsortedPasswords = []
        // let passwords = []
        
        if(localStorage.key(i).includes('username')){
            unsortedUsernames.push(localStorage.key(i));
            usernames = unsortedUsernames.sort();
        } else if(localStorage.key(i).includes('password')){
            unsortedPasswords.push(localStorage.key(i));
            passwords = unsortedPasswords.sort();
        }

        
    };
    for(i=0; i < localStorage.length; i++){
        const creatun = document.createElement('td')
        const creatpw = document.createElement('td')
         
            creatun.textContent = localStorage.getItem(usernames[i])
            userNameRow.appendChild(creatun) 
            passwords = unsortedPasswords.sort();
            creatpw .textContent = localStorage.getItem(passwords[i])
            passwordRow.appendChild(creatpw)

    }
    
}
loadTable()

// function buildTabel() {
//     let arr = []
//     for(i=0; i < localStorage.length; i++) {
//         arr.push(localStorage.key(i))
        
//     }
//     let sortArr = arr.sort()
//     console.log(sortArr)
// }







