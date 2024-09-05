//---------getting elemtents by id from HTML file.
const submitebtn = document.getElementById('submitBtn');
const unInput = document.getElementById('usernameInput');
const pwInput = document.getElementById('passwordInput');
const userNameRow = document.getElementById('userNameRow');
const passwordRow = document.getElementById('passwordRow');
const table = document.getElementById('table')

//--------------------------
const createTableRow = document.createElement('tr');
const createTableData = document.createElement('td');
//--------------------

let dataBase = [];
let usernames = [];
let passwords = [];
//--------------------
// let unIndex = usernames.indexOf(unInput.value);
// let pwIndex = passwords.indexOf(pwInput.value);



function loadDataBase() {
    //grabing the data from the local storeage and then puting it in to the arrays.
    //the if statment will only get the itoms the include passwerd and username to put them in the specific array.
    for(i=0; i < localStorage.length; i++){
        if(localStorage.key(i).includes('username')) {
            usernames.push(localStorage.getItem(localStorage.key(i))) 
        } else if(localStorage.key(i).includes('assword')) {
            passwords.push(localStorage.getItem(localStorage.key(i))) 
        }
    }
    usernames.sort()
    passwords.sort()
    console.log(usernames);
    console.log(passwords);
    //-----------------
    // in this section im creating the elements on the visual.
    for(i=0; i < usernames.length; i++) {
        const createTableRow = document.createElement('tr');
        const createUsernameData = document.createElement('td');
        const createPasswordData = document.createElement('td');
        const createUsername = createUsernameData;
        const createPassword = createPasswordData;
        createUsername.textContent = usernames[i];
        createPassword.textContent = passwords[i];
        userNameRow.appendChild(createUsername);
        passwordRow.appendChild(createPassword);
    }
}
loadDataBase()

function updateDataBase() {
    let number = localStorage.getItem("number")
    if( unInput.value != '' && pwInput.value != '' && !usernames.includes(unInput.value) && !passwords.includes(pwInput.value)){
        localStorage.setItem(`${number}username`, unInput.value)
        localStorage.setItem(`${number}password`, pwInput.value)
        number++

    } else {
        let foundUsername = null;
        let foundPassword = null;

        for(i=0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key)
            if(value === unInput.value ) {
                foundUsername = key;
                break;
            }
        }
        if(foundUsername) {
            localStorage.removeItem(foundUsername)
        }

        for(i=0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key)
            if(value === pwInput.value ) {
                foundPassword = key;
                break;
            }
        }
        if(foundPassword) {
            localStorage.removeItem(foundPassword)
        }
    
    }
    
    
    localStorage.setItem('number', number) 
    location.reload();
}

submitebtn.addEventListener('click', updateDataBase);









// submitebtn.addEventListener('click', buildRow )

// function buildRow() {
//     let index = localStorage.getItem('number')
//     index++
//     // ---------
//     localStorage.setItem(`${index}username`,unInput.value);
//     localStorage.setItem(`${index}password`,pwInput.value);
//     // -------
//     localStorage.setItem('number',index)

//     const createun = document.createElement('td')
//     const createpw = document.createElement('td')
//     createun.textContent = unInput.value
//     createpw.textContent = pwInput.value
//     userNameRow.appendChild(createun)
//     passwordRow.appendChild(createpw)

//     //----------------
//     let localDataKey = []
//     let localDataUsernames = []
//     let localDataPasswords = []
//     let accountExists = false;

//     for(i = 0; i < localDataUsernames.length; i++){
//         if(unInput.value != " " ){
//             accountExists = true;
           
//         }
        
//     }
//     console.log(accountExists)
    
//     for(i=0; i < localStorage.length; i++){
        
//         localDataKey.push(localStorage.key(i))
//         localDataKey.sort()

//         if(localStorage.key(i).includes('username') && !accountExists ){
//             localDataUsernames.push(localStorage.getItem(localStorage.key(i)))
//             localDataUsernames.sort()
//         } else if(localStorage.key(i).includes('password')){
//             localDataPasswords.push(localStorage.getItem(localStorage.key(i)))
//             localDataPasswords.sort()
//         }
        
//     }
    

//     console.log('usernames',localDataUsernames)  
//     console.log('passwords',localDataPasswords) 

// }


// function loadTable() {

//     let unsortedUsernames = [];
//     let usernames = [];
//     let unsortedPasswords = [];
//     let passwords = [];
//     for(i=0; i < localStorage.length; i++) {
        
//         if(localStorage.key(i).includes('username')){
//             unsortedUsernames.push(localStorage.key(i));
//             usernames = unsortedUsernames.sort();
//         } else if(localStorage.key(i).includes('password')){
//             unsortedPasswords.push(localStorage.key(i));
//             passwords = unsortedPasswords.sort();
//         }
        
//     };
    
//     for(j=0; j < passwords.length; j++){
//         const createun = document.createElement('td')
//         const createpw = document.createElement('td')
         
//             createun.textContent = localStorage.getItem(usernames[j])
            
//             passwords = unsortedPasswords.sort();
//             createpw.textContent = localStorage.getItem(passwords[j])
                
//             if(passwords.length < 190) {
//                 userNameRow.appendChild(createun) 
//                 passwordRow.appendChild(createpw)
      
//             } 

//     }
 
// }
// loadTable()