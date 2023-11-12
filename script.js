const content = document.querySelector('#content')
let data 

async function getData() {
    const fData = await fetch('data.json')
    const jData = await fData.json()
    data = jData.users
    console.log(data)
    printt()
}
getData()

function printt() {
    data.map(item => content.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img src="${item.img}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${item.name} ${item.surname}, ${item.age}</h5>
                                            <p class="card-text">${item.job}</p>
                                        </div>
                                        </div>`
)}