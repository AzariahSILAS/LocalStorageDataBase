const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('usernameInput');
const pwInput = document.getElementById('passwordInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const table = document.getElementById('table')








submitebtn.addEventListener('click', buildRow)

function buildRow() {
    let index = localStorage.getItem('number')
    index++
    // ---------
    localStorage.setItem(`${index}username`,unInput.value);
    localStorage.setItem(`${index}password`,pwInput.value);
    // -------
    localStorage.setItem('number',index)

    const creatun = document.createElement('td')
    const creatpw = document.createElement('td')
    creatun.textContent = unInput.value
    creatpw .textContent = pwInput.value
    userNameRow.appendChild(creatun)
    passwordRow.appendChild(creatpw)

}


function loadTable() {

    let unsortedUsernames = [];
    let usernames = [];
    let unsortedPasswords = [];
    let passwords = [];
    for(i=0; i < localStorage.length; i++) {
        
        if(localStorage.key(i).includes('username')){
            unsortedUsernames.push(localStorage.key(i));
            usernames = unsortedUsernames.sort();
        } else if(localStorage.key(i).includes('password')){
            unsortedPasswords.push(localStorage.key(i));
            passwords = unsortedPasswords.sort();
        }

        
    };
    
    for(j=0; j < passwords.length; j++){
        const creatun = document.createElement('td')
        const creatpw = document.createElement('td')
         
            creatun.textContent = localStorage.getItem(usernames[j])
            
            passwords = unsortedPasswords.sort();
            creatpw.textContent = localStorage.getItem(passwords[j])
                
            if(passwords.length < 190) {
                userNameRow.appendChild(creatun) 
                passwordRow.appendChild(creatpw)
                console.log(passwords.length)
            } 
            // else {
            //     const newRow = document.createElement('tr');
            // }

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







