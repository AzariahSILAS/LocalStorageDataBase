const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('usernameInput');
const pwInput = document.getElementById('passwordInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const table = document.getElementById('table')








submitebtn.addEventListener('click', buildRow )

function buildRow() {
    let index = localStorage.getItem('number')
    index++
    // ---------
    localStorage.setItem(`${index}username`,unInput.value);
    localStorage.setItem(`${index}password`,pwInput.value);
    // -------
    localStorage.setItem('number',index)

    const createun = document.createElement('td')
    const createpw = document.createElement('td')
    createun.textContent = unInput.value
    createpw .textContent = pwInput.value
    userNameRow.appendChild(createun)
    passwordRow.appendChild(createpw)

    //----------------
    let localDataKey = []
    let localDataUsernames = []
    let localDataPasswords = []
   
    
    for(i=0; i < localStorage.length; i++){
        
        localDataKey.push(localStorage.key(i))
        localDataKey.sort()

        if(localStorage.key(i).includes('username')){
            localDataUsernames.push(localStorage.getItem(localStorage.key(i)))
            localDataUsernames.sort()
        } else if(localStorage.key(i).includes('password')){
            localDataPasswords.push(localStorage.getItem(localStorage.key(i)))
            localDataPasswords.sort()
        }
        
        

     
    }
    // if(localDataUsernames.includes(unInput.value) && localDataPasswords.includes(pwInput.value)){
    //     console.log('already have this account')
    // } else {
    //     console.log('created a new account')
    // }
    
  
    // console.log(localDataKey)
    console.log('usernames',localDataUsernames)  
    console.log('passwords',localDataPasswords) 
    




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
        const createun = document.createElement('td')
        const createpw = document.createElement('td')
         
            createun.textContent = localStorage.getItem(usernames[j])
            
            passwords = unsortedPasswords.sort();
            createpw.textContent = localStorage.getItem(passwords[j])
                
            if(passwords.length < 190) {
                userNameRow.appendChild(createun) 
                passwordRow.appendChild(createpw)
                // console.log(passwords.length)
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







