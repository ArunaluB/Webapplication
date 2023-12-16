var selectedRow = null;
var itemData = [];

// Show Alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => div.remove(), 3000);
}

// Clear ALL Fields
function clearFields() {
    document.querySelector("#itemcode").value = "";
    document.querySelector("#ItemName").value = "";
    document.querySelector("#Price").value = "";
    document.querySelector("#Discount").value = "";
    document.querySelector("#Expiredate").value = "";
}

// Load data from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedData = JSON.parse(localStorage.getItem("itemData")) || [];
    itemData = savedData;
    renderCustomerData();
});

// Add data
document.querySelector("#Customer-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Form Values
    const itemcode = document.querySelector("#itemcode").value;
    const itemName = document.querySelector("#ItemName").value;
    const price = document.querySelector("#Price").value;
    const discount = document.querySelector("#Discount").value;
    const expiredate = document.querySelector("#Expiredate").value;

    // Validate
    if (!itemcode || !itemName || !price || !discount || !expiredate) {
        showAlert("Please fill in all fields", "danger");
    } else {
        if (selectedRow === null) {
            const newRow = {
                itemcode,
                itemName,
                price,
                discount,
                expiredate
            };

            itemData.push(newRow);
            localStorage.setItem("itemData", JSON.stringify(itemData));
            showAlert("Item added successfully", "success");
        } else {
            selectedRow.children[0].textContent = itemcode;
            selectedRow.children[1].textContent = itemName;
            selectedRow.children[2].textContent = price;
            selectedRow.children[3].textContent = discount;
            selectedRow.children[4].textContent = expiredate;

            const index = selectedRow.dataset.index;
            itemData[index] = {
                itemcode,
                itemName,
                price,
                discount,
                expiredate
            };
            localStorage.setItem("itemData", JSON.stringify(itemData));
            showAlert("Item info edited", "info");

            selectedRow = null;
        }

        clearFields();
        renderCustomerData();
    }
});

// Render customer data to the table
function renderCustomerData() {
    const list = document.querySelector("#Customer-list");
    list.innerHTML = "";

    itemData.forEach((row, index) => {
        const newRow = document.createElement("tr");
        newRow.dataset.index = index;

        newRow.innerHTML = `
            <td>${row.itemcode}</td>
            <td>${row.itemName}</td>
            <td>${row.price}</td>
            <td>${row.discount}</td>
            <td>${row.expiredate}</td>

            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
        `;
        list.appendChild(newRow);
    });
}

// Edit data
document.querySelector("#Customer-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        const index = selectedRow.dataset.index;
        document.querySelector("#itemcode").value = itemData[index].itemcode;
        document.querySelector("#ItemName").value = itemData[index].itemName;
        document.querySelector("#Price").value = itemData[index].price;
        document.querySelector("#Discount").value = itemData[index].discount;
        document.querySelector("#Expiredate").value = itemData[index].expiredate;
    }
});

// Delete Data
document.querySelector("#Customer-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete")) {
        const index = target.parentElement.parentElement.dataset.index;
        itemData.splice(index, 1);
        localStorage.setItem("itemData", JSON.stringify(itemData));
        renderCustomerData();
        showAlert("Item data deleted", "danger");
    }
});

function redirectToItemPage() {
    window.location.href = '../page/item.html';
}



document.addEventListener("DOMContentLoaded", function () {
    const savedData = JSON.parse(localStorage.getItem("itemData")) || [];
    itemData = savedData;
    renderCustomerData();

    // Set default value of Expiredate to current date
    const today = new Date().toISOString().split("T")[0];
    document.querySelector("#Expiredate").value = today;

    // Show alert for expired items
    checkExpiredItems();
});

// Function to show alert for expired items
function checkExpiredItems() {
    const currentDate = new Date();
    itemData.forEach((row) => {
        const expireDate = new Date(row.expiredate);
        if (expireDate <= currentDate) {
            showAlert(`Item ${row.itemName} has expired!`, "warning");
        }
    });
}

// ... (your existing code)

// Table Data Search on Page Load
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("input", function () {
        const searchValue = this.value.trim().toLowerCase();
        const filteredData = itemData.filter((row) =>
            Object.values(row).some(
                (value) => value.toString().toLowerCase().includes(searchValue)
            )
        );
        renderCustomerData(filteredData);
    });
});
