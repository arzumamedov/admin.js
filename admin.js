let adminData
const table = document.querySelector('table')

async function getData() {
    const fData = await fetch('data.json')
    const jData = await fData.json()
    adminData = jData.users
    console.log(adminData)
    getTable()
}
getData()

function getTable() {
    table.innerHTML = ''
    table.innerHTML = `<tr>
                            <td>img</td>
                            <td>Name, Surname</td>
                            <td>Age</td>
                            <td>Job</td>
                            <td></td>
                        </tr>`
    adminData.map(item => table.innerHTML += `<tr>
                                                <td><img src="${item.img}"></td>
                                                <td>${item.name} ${item.surname}</td>
                                                <td>${item.age}</td>
                                                <td>${item.job}</td>
                                                <td><button onclick="deleteUser('${item.name}')">Delete User</button></td>
                                            </tr>`)
}

const inputs = document.querySelectorAll('input')

function addUser() {
    let obj = {
        name: inputs[0].value,
        surname: inputs[1].value,
        age: inputs[2].value,
        job: inputs[3].value,
        img: inputs[4].value
    }
    adminData.push(obj)
    getTable()
}

function deleteUser(name) {
    let userIndex =  adminData.findIndex(item => item.name == name)
    adminData.splice(userIndex,1)
    getTable()
}