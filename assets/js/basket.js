let basket = JSON.parse(localStorage.getItem('basket'))



function ShowAlert() {
    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket.length === 0) {
        document.getElementById('Alert').classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }
    else {
        document.getElementById('Alert').classList.add('d-none')
        document.querySelector('table').classList.remove('d-none')
    }
    let list = ''
    basket.forEach(item => {

        list +=
            `
           <tr>
           <td>${item.id}</td>
           <td><img src="${item.img}" alt=""></td>
           <td>${item.name}</td>
           <td><input type="number" id="changeInput" onchange="Change(event.target,${item.id})" value="${item.count}" ></td>
           <td>${item.price}</td>
           <td>${item.price*item.count}</td>

            <td><button class="btn btn-danger" id="remove" onclick="RemoveBtn(event.target, ${item.id})"><i class="fa-solid fa-trash-can"></i></button></td>

            </tr>
            `

    })
    let totalPrice = 0
    let count = 0
    for (let item of basket) {
        totalPrice+=item.count*item.price
        count += +item.count
    }
    let resultCount = document.getElementById('finalCount')
    let resultPrice = document.getElementById('finalPrice')
    resultCount.innerHTML = count
    resultPrice.innerHTML = totalPrice
    
    document.getElementById('tbody').innerHTML = list


}

ShowAlert();

function Change(el,id) {
    let basket = JSON.parse(localStorage.getItem('basket'))
    let inputChange=el.value
    let prod = basket.find(p=>p.id==id)
    prod.count=inputChange
    localStorage.setItem('basket',JSON.stringify(basket))
    ShowAlert()
}

function RemoveBtn(el, id) {
    let basket = JSON.parse(localStorage.getItem('basket'))
    console.log('gagaa');

    let basketId = basket.findIndex(x => x.id == id);

    basket.splice(basketId, 1)

    localStorage.setItem('basket',JSON.stringify(basket))

    el.parentElement.parentElement.remove();
    ShowAlert();


}


