let url = 'https://fakestoreapi.com/products';
// var item = '';
// async function getData(){
//     var res = await fetch(url);
//     var data = await res.json();
//     for(var i in data)
//     {
//         item += `
//             <div class="mangeBox">
//                 <img src="${data[i]['image']}" alt="">
//                 <div class="informetion_products">
//                     <p id="id">ID: ${data[i]['id']}</p>
//                     <p id="title">${data[i]['title']}</p>
//                     <p id="category">${data[i]['category']}</p>
//                     <p id="description">${data[i]['description']}</p>
//                     <p id="rating">${data[i]['rating']}</p>
//                 </div>
//             </div>
//         `;
//     }
//     document.querySelector('.Api').innerHTML = item;
// }
// getData();
fetch(url).then(data=>{
    return data.json(); //format API data to json data 
}).then(completedData=>{
    var item = '';
    function CompLetedData(values){
        item += `
            <div class="mangeBox">
                <div class="image">
                    <img src="${values['image']}" alt="">
                </div>
                <div class="informetion_products">
                    <p id="id">ID: ${values['id']}</p>
                    <p id="title">${values['title']}</p>
                    <p id="category">${values['category']}</p>
                    <p id="description">${values['description']}</p>
                    <p id="rating">${values['rating']}</p>
                </div>
            </div>
        `;
    }
    completedData.forEach(CompLetedData);
    document.querySelector('.Api').innerHTML = item;
});

document.querySelector('#openMenu').addEventListener('click', function(){
    document.querySelector('.Menu').style.visibility = 'visible';
});