var selectedRow = null;
var customerData = [];

// Show Alerts
function ShowAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear ALL Fields
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#PhoneNumber").value = "";
}

// Load data from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedData = JSON.parse(localStorage.getItem("customerData")) || [];
    customerData = savedData;
    renderCustomerData();
});

// Add data
document.querySelector("#Customer-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const PhoneNumber = document.querySelector("#PhoneNumber").value;

    // Validate
    if (firstName == "" || lastName == "" || PhoneNumber == "") {
        ShowAlert("Please fill in all fields", "danger");
    } else {
        if (selectedRow == null) {
            const newRow = {
                firstName,
                lastName,
                PhoneNumber
            };

            customerData.push(newRow);
            localStorage.setItem("customerData", JSON.stringify(customerData));
            ShowAlert("Customer Added Successfully", "success");
        } else {
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = PhoneNumber;

            const index = selectedRow.dataset.index;
            customerData[index] = {
                firstName,
                lastName,
                PhoneNumber
            };
            localStorage.setItem("customerData", JSON.stringify(customerData));
            ShowAlert("Customer Info Edited", "info");

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

    customerData.forEach((row, index) => {
        const newRow = document.createElement("tr");
        newRow.dataset.index = index;

        newRow.innerHTML = `
            <td>${row.firstName}</td>
            <td>${row.lastName}</td>
            <td>${row.PhoneNumber}</td>
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
        document.querySelector("#firstName").value = customerData[index].firstName;
        document.querySelector("#lastName").value = customerData[index].lastName;
        document.querySelector("#PhoneNumber").value = customerData[index].PhoneNumber;
    }
});

// Delete Data
document.querySelector("#Customer-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete")) {
        const index = target.parentElement.parentElement.dataset.index;
        customerData.splice(index, 1);
        localStorage.setItem("customerData", JSON.stringify(customerData));
        renderCustomerData();
        ShowAlert("Customer Data Deleted", "danger");
    }
});

function redirectToItemPage() {
    window.location.href = '../page/item.html';
}