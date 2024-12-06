
//Helper function to get the element
function $get(elemId) {
    return document.getElementById(elemId);
}
//Helper method to create an element and return the created element
function $create(elem) {
    return document.createElement(elem);
}
//holds the list of products
const productList = [
    //{productId:0, productName:'', price: 0}
];

window.onload = function () {
    $get("form1").addEventListener("submit", onFormSubmit);
    showHide("tbl1");
    $get("errorDiv").style.display='none';
}
function showHide(elemId) {
    if (productList.length == 0) {
        $get(elemId).style.display = 'none';
    } else {
        $get(elemId).style.display = 'block';
    }
}
function onFormSubmit(e) {
    e.preventDefault();  //canceling the default submit action of the form.
    e.stopPropagation(); //upward and downward propagation of events is canceled.
    addItemToArray();
    projectArrayToTable();
    showHide("tbl1");
    return false; //canceling the browser submit behavior.
}
const errorMsgs = []; 
function validateName(productName) { 
    var pname=$get("pname"); 
    var attr1 = pname.getAttribute("data-required");
    if(attr1=="true") {
        if(!productName.length) {
            errorMsgs.push(pname.getAttribute("data-reqmsg"))
        }
    }
    var ml = pname.getAttribute("data-maxlength");
    if(productName.length) {
        if(productName.length>ml)
            errorMsgs.push(pname.getAttribute("data-maxlengthmsg"))
    }
    $get("errorDiv").innerHTML=""; 
    var ul = $create("ul"); 
    errorMsgs.forEach(c=>{
        var li=$create("li");
        li.innerText = c;
        ul.appendChild(li);
    })
    $get("errorDiv").appendChild(ul);
    return errorMsgs.length>0;
}

function addItemToArray() {
    var pname = $get("pname").value;
    var price = $get("price").value;
    if(validateName(pname)) {
         $get("errorDiv").style.display='block';
        $get("pname").className = "inputError";
        return;
    };

    var obj = { productId: productList.length + 1, productName: pname, price: price };
    productList.push(obj);
    pname.value = "";
    price.value = "";
}
function projectArrayToTable() {
    var tblData = $get("tblData")
    tblData.innerHTML = "";
    productList.forEach((value, index) => {
        var tr = $create("tr");
        var td1 = $create("td");
        td1.innerHTML = value.productId;
        tr.appendChild(td1);
        td1 = $create("td");
        td1.innerHTML = value.productName;
        tr.appendChild(td1);
        td1 = $create("td");
        td1.innerHTML = value.price;
        tr.appendChild(td1);
        td1 = $create("td");
        var btn = $create("button");
        btn.type = "button";
        btn.innerHTML = "Remove";
        btn.id = value.productId;
        btn.addEventListener("click", removeItem);
        td1.appendChild(btn);
        tr.appendChild(td1);
        tblData.appendChild(tr);
    });
    var span = $get("totalItems");
    span.innerText = productList.length;
}
function removeItem(e) {
    var index = productList.findIndex(c => c.productId == e.target.id);
    if (index > -1) {
        productList.splice(index, 1);
        projectArrayToTable();
        showHide("tbl1");
    }
}