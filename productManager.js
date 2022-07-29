let products = [
    new Product("Iphone 13", 28000, 30),
    new Product("Macbook pro M2", 35000, 20),
    new Product("Gaming....", 30000, 10)
];
// C: Create
// R: Read (list, detail)
// U: Update
// D: Delete



//Ham hien thi danh sach
function showAllProducts() {
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content+= "  <tr>" +
            "        <td>"+ products[i].name +"</td>" +
            "        <td>"+ products[i].price +"</td>" +
            "        <td>"+ products[i].number +"</td>" +
            "        <td><img src='"+products[i].img+"'></td>" +
            "        <td><button>Edit</button></td>" +
            "        <td><button onclick='deleteByIndex("+i+")'>Delete</button></td>" +
            "    </tr>"
    }
    //ghi lai bang innerHTML
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("numberOfProduct").innerText = products.length;
}
showAllProducts();
function createNewProduct() {
    //b1: lay du lieu trong the input
    let name = document.getElementById("productName").value;
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    let img = document.getElementById("img").value;
    let newP = new Product(name, price, number, img);
    //b2: them moi vao mang
    products.push(newP);
    //b3: Ve lai bang
    showAllProducts();
}
//xoa theo index
function deleteByIndex(index) {
    // xoa phan tu
    products.splice(index, 1);
    // in lai mang
    showAllProducts();
}
