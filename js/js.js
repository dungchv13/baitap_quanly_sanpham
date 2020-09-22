let arr = ['tra da','cafe','kem tuoi','nuoc dua','nuoc mia'];
function show(){
    let html = '';
    for(let i = 0;i < arr.length;i++){
        html += '<tr>';
        html += '<td>'+i+'</td>';
        html += '<td>'+arr[i]+'</td>';
        html += '<td>'+'<button id="edit'+i+'" onclick="editProduct('+i+')">EDIT</button>'+'</td>';
        html += '<td>'+'<button id="delete'+i+'" onclick="deleteProduct('+i+')">DELETE</button>'+'</td>';
        html += '</tr>';
    }
    document.getElementById('table').innerHTML = html;
}
function deleteProduct(i){
    arr.splice(i,1);
    show();
}
function editProduct(i){
    arr[i] = prompt('nhap ten product');
    show();
}
function addProduct(){
    let k = document.getElementById('input').value;
    arr.push(k);
    show();
}


show();