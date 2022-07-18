let basket = JSON.parse(localStorage.getItem('basket'))
let totalPrice = 0
basket.forEach(item=>{
    totalPrice=item.price
    
})


function ShowAlert(){
    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket.length ===0) {
        document.getElementById('Alert').classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }
    else{
        document.getElementById('Alert').classList.add('d-none')
        document.querySelector('table').classList.remove('d-none')
    }
        let  list = ''
       basket.forEach(item=>{

           list +=
           `
           <tr>
           <td>${item.id}</td>
           <td><img src="${item.img}" alt=""></td>
           <td>${item.name}</td>
           <td><input type="number" id="changeInput" onchange="Change()" value="${item.count}" ></td>
           <td>${totalPrice}</td>
            <td><button class="btn btn-danger" id="remove" onclick="RemoveBtn()"><i class="fa-solid fa-trash-can"></i></button></td>

            </tr>
            `

        })
        let sum = 0
        let count =0
        for (let item of basket) {
            sum+=item.price
            count+=item.count
        }
        let resultCount = document.getElementById('finalCount')
        let resultPrice = document.getElementById('finalPrice')
        resultPrice.innerHTML = sum
        resultCount.innerHTML= count

        document.getElementById('tbody').innerHTML = list


    }

    ShowAlert();

    function Change(){
        let basket = JSON.parse(localStorage.getItem('basket'))
        let inputChange = document.getElementById('changeInput').value
        // console.log(inputChange)

        basket.forEach(item=>{
          item.count=0

           item.count = Number(inputChange)
            totalPrice = Number(item.price)*Number(item.count)

            // console.log(item.price)
        //    console.log(typeof(item.price));
          // item.price= newPrice

        })
        localStorage.setItem('basket',JSON.stringify(basket))
        ShowAlert();
    }
    // function FinalResults(){

       
    //     let basket = JSON.parse(localStorage.getItem('basket'))
    //     let sum =0
    //     basket.forEach(x=>{
    //         sum = x.price++
    //     })
    //     let count = 0
    //     basket.forEach(item=>{
    //         count=item.count
    //     })
    //     for (let item of basket) {
    //         sum+=item.price
    //         count+=item.count
    //     }
    //     let resultCount = document.getElementById('finalCount')
    //     let resultPrice = document.getElementById('finalPrice')
    //     resultPrice.innerHTML = sum
    //     resultCount.innerHTML= count
    // }
        
    // FinalResults()
    
    function RemoveBtn(){
        let basket = JSON.parse(localStorage.getItem('basket'))
        
        for (let x of basket) {
            let filtered = basket.filter(item=>item.id !== x.id)
            localStorage.setItem('basket',JSON.stringify(filtered))
        }
        
    }


