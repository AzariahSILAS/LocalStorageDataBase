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
    //---------
    localStorage.setItem(`${index}username`,unInput.value);
    localStorage.setItem(`${index}password`,pwInput.value);
    //-------
    localStorage.setItem('number',index)

    const creatun = document.createElement('td')
    const creatpw = document.createElement('td')
    creatun.textContent = unInput.value
    creatpw .textContent = pwInput.value
    userNameRow.appendChild(creatun)
    passwordRow.appendChild(creatpw)

}

function buildTabel() {
    let arr = []
    for(i=0; i < localStorage.length; i++) {
        arr.push(localStorage.key(i))
        
    }
    let sortArr = arr.sort()
    console.log(sortArr)
}
buildTabel()






