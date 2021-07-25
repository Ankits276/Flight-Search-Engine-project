
function checkedradio(type) {
    if (type === "Single") {
        document.getElementById("return-date").style.display = "none";
        document.getElementById("Box5-Para3").style.display = "none";
        document.getElementById("r-place").style.display = "none";
    }
    else {
        document.getElementById("return-date").style.display = "block"
        document.getElementById("Box5-Para3").style.display = "block"
        document.getElementById("r-place").style.display = "block";
    }

}
function Search() {
    var str1 = document.getElementById("Origin").value;
    var str2 = document.getElementById("Destination").value;
    var d_date = document.getElementById("Departure").value;
    var r_date = document.getElementById("Return").value;
    var p_range = document.getElementById("myRange").value;

    if (!str1) {
        alert('Please fill all fields')
        return
    }
    document.getElementById("d-date").innerHTML = d_date;
    document.getElementById("r-date").innerHTML = r_date;

    document.getElementById("return-loc").innerHTML = str1.toUpperCase();
    document.getElementById("return-loc1").innerHTML = str1.toUpperCase();
    document.getElementById("dep-loc").innerHTML = str2.toUpperCase();


    // var str1= "pune";
    // var str2= "Mumbai";
    fetch('flightlist.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    function appendData(data) {
        var mainContainer = document.getElementById("One-way-data");
        var html = '';
        for (var i = 0; i < data.length; i++) {
            var ans = str1.toUpperCase().localeCompare(data[i].from.toUpperCase());
            var ans1 = str2.toUpperCase().localeCompare(data[i].to.toUpperCase());
            if (ans == 0 && ans1 == 0) {
                var dummy = `<div class="d-flex j-between">
                <div class="d-flex j-between justfiy">
                    <div id="logo">
                        <div id="box7">
                            <p>Rs. ${data[i].fare}</p>
                        </div>
                        <div class="d-flex justfiy">
                            <div class="One-way-data">
                                <p>${data[i].flightcode}</p>
                                <p>${data[i].from}>${data[i].to}</p>
                                <p>Depart: ${data[i].depart}</p>
                                <p>Arrive: ${data[i].arrival}</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="logo-button,d-flex">
                <img src="img/logo.jpg" alt="Error" width="200px">
                <p><button id="Booking-button">Book this flight</button></p>
            </div>
        </div>`;
                html += dummy;

                // mainContainer.appendChild(div);

            };


        }
        document.getElementById("One-way-data").innerHTML = html;
    }
}