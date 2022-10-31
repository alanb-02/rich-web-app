/* function that takes data inputted into the form and places them into table */
function submitDetail() {

    /* variables hold form inputs */
    var x, y, z;
    x = document.getElementById("name").value;
    y = document.getElementById("phone").value;
    z = document.getElementById("email").value;

    /* checking if form inputs are empty */
    if (x == "" || y == "" || z == "") {
        /* the error message that is displayed if inputs are empty */
        const para = document.createElement("p");
        para.id = "newp";
        para.style.color ="red";
        para.style.backgroundColor = "white";
        const node = document.createTextNode("ERROR : Please try again !!!");
        para.appendChild(node);

        /* inserting the error message to the page */
        const element = document.getElementById("error");
        const child = document.getElementById("p1");
        element.insertBefore(para, child);

        /* clears the inputs */
        document.getElementById("form").reset();
        return false
    }
    /* if the form inputs are ont empty they are added to the table */
    else {
        document.getElementById("phonedir").style.display="block"; 

        /* assigning the row to where insert the data enetered  */
        var table = document.getElementById("phonedir");
        var row = table.insertRow(-1);
        var date = row.insertCell(0);
        var desc = row.insertCell(1);
        var amt = row.insertCell(2);

        /* inserting into the table (html) */
        date.innerHTML = document.getElementById("name").value;
        desc.innerHTML = document.getElementById("phone").value;
        amt.innerHTML = document.getElementById("email").value;

        document.getElementById("form").reset();

        /* removing error div if it is visible */
        document.getElementById("newp").remove();
    }

}



function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("phonedir");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 

    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;

        /*Loop through all table rows (except the first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switchand mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
        } else {
            /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


/* function goes through the table phone number coloumn to see if there are any numbers that match what the user searched */
function searchTable() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("phonedir");
    tr = table.getElementsByTagName("TR");

    /* checking the data cell at every row of the table to find matching at */
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("TD")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

