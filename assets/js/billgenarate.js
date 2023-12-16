let invoicecount = 0;
function goToMenu() {
    window.location.href = "../page/Menu.html";
}

jQuery(document).ready(function () {
    $('#checkoutB').click(function () {
        window.print();
        updateinvoicenumber(); // Call the correct function
        console.log(invoicecount); // Log the updated invoice count
        incrementNumber(); // Increment the invoice count
        saveInvoiceCount(); // Save the updated invoice count in localStorage
    });
    loadInvoiceCount(); // Load the invoice count initially
    updateinvoicenumber(); // Display the initial invoice number
});

/* current date */
function updateCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var formattedDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
    document.getElementById("currentDate").textContent = formattedDate;
}

function incrementNumber() {
    invoicecount++;
}

function updateinvoicenumber() {
    document.getElementById("invoiceid").textContent = "INVOICE NO:" + invoicecount;
}

function saveInvoiceCount() {
    localStorage.setItem("invoicecount", invoicecount);
}

function loadInvoiceCount() {
    var savedInvoiceCount = localStorage.getItem("invoicecount");
    if (savedInvoiceCount !== null) {
        invoicecount = parseInt(savedInvoiceCount, 10);
    }
}

updateCurrentDate(); // Call the function to update the current date

