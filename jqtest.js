//Listen when a button, with a class of "myButton", is clicked
//You can use any jQuery/JavaScript event that you'd like to trigger the call

$(document).ready(function(){
    
    localStorage['name'] = 'mudkip clinics';
    
    function ajaxCall(url, data, successCallback, errorCallback)
    {
        $.ajax({
            //The URL to process the request
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : 'Bearer abcd'
            },
            url : url,
            //The type of request, also known as the "method" in HTML forms
            //Can be 'GET' or 'POST'
            type : 'POST',
            //Any post-data/get-data parameters
            crossDomain : true,
            //dataType : "application/x-www-form-urlencoded",
            data : data,
            //The response from the server
            success : function(data) {
            //You can use any jQuery/JavaScript here!!!
                successCallback(data);
            },
            error: function (xhr, status, error) {
                errorCallback(xhr, status, error);
            },

        });
    }
    
    $('#ahhhh').click(function() {
    //Send the AJAX call to the server
        supplies = {
            bandages: parseInt(document.getElementById("bandages").value),
            examination_gloves: parseInt(document.getElementById("examination_gloves").value),
            scalpels: parseInt(document.getElementById("scalpels").value),
            iv_kits: parseInt(document.getElementById("iv_kits").value),
            masks: parseInt(document.getElementById("masks").value),
            needles: parseInt(document.getElementById("needles").value),
            vitamins: parseInt(document.getElementById("vitamins").value),
            dental_supplies: parseInt(document.getElementById("dental_supplies").value),
            optical_supplies: parseInt(document.getElementById("optical_supplies").value),
            personal_hygiene: parseInt(document.getElementById("personal_hygiene").value),
            antiseptics: parseInt(document.getElementById("antiseptics").value),
        }
        ajaxCall('http://178.128.226.180:5050/yhacksapi/updateData/', {'username' : localStorage['name'], 'supplies' : supplies},
            function(data) {
            //You can use any jQuery/JavaScript here!!!
            },
            function (xhr, status, error) {
                console.log('Error: ' + error);
                alert('Error connecting to the server.');
            });
    });
    
    $('#button').click(function() {
    //Send the AJAX call to the server
        ajaxCall('http://178.128.226.180:5050/yhacksapi/login/', {'username' : localStorage['name'], 'password' : '1234'}, 
        function(data)
        {
            console.log("Code: " + data.code);
            console.log('data: ' + JSON.stringify(data.message));
            localStorage['name'] = JSON.stringify(data.message);
            
        },
        function(xhr, status, error)
        {
            console.log('Error: ' + error);
            alert('Error connecting to the server.');
        });
    });
    
    
    ajaxCall('http://178.128.226.180:5050/yhacksapi/getInfo/', {'username' : localStorage['name'] },
        function(data)
        {
            $("#u4_text").text(data.name);
            $("#u10_input").text(data.location);
        },
        function(xhr, status, error)
        {
            console.log('Error: ' + error);
            alert('Error connecting to the server.');
        });
        
    if (localStorage['name'] == 'chapter')
    {
        ajaxCall('http://178.128.226.180:5050/yhacksapi/getData/', {'username' : localStorage['name'] }, 
        function(data) {
        //You can use any jQuery/JavaScript here!!!
            //TODO: Fill out chapter thing
            var thing = 0;
            var item = 0;
            while (item != 11)
            {
                for (var x = 0; x < data.size; x++)
                {
                    if (item == 0 && data.bandages != null)
                    {
                        thing += data.bandages;
                    }
                    else if ( item == 1 && data.examination_gloves != null)
                    {
                        thing += data.examination_gloves;
                    }
                    else if ( item == 2 && data.scalpels != null)
                    {
                        thing += data.scalpels;
                    }
                    else if ( item == 3 && data.iv_kits != null)
                    {
                        thing += data.iv_kits;
                    }
                    else if ( item == 4 && data.masks != null)
                    {
                        thing += data.masks;
                    }
                    else if ( item == 5 && data.needles != null)
                    {
                        thing += data.needles;
                    }
                    else if ( item == 6 && data.vitamins != null)
                    {
                        thing += data.vitamins;
                    }
                    else if ( item == 7 && data.dental_supplies != null)
                    {
                        thing += data.dental_supplies;
                    }
                    else if ( item == 8 && data.optical_supplies != null)
                    {
                        thing += data.optical_supplies;
                    }
                    else if ( item == 9 && data.personal_hygiene != null)
                    {
                        thing += data.personal_hygiene;
                    }
                    else if ( item == 10 && data.antiseptics != null)
                    {
                        thing += data.antiseptics;
                    }
                }
                if (item == 0)
                {
                    $("#u19_text").text(thing);
                }
                else if (item == 1)
                {
                    $("#u22_text").text(thing);
                }
                else if (item == 2)
                {
                    $("#u25_text").text(thing);
                }
                else if (item == 3)
                {
                    $("#u28_text").text(thing);
                }
                else if (item == 4)
                {
                    $("#u31_text").text(thing);
                }
                else if (item == 5)
                {
                    $("#u34_text").text(thing);
                }
                else if (item == 6)
                {
                    $("#u37_text").text(thing);
                }
                else if (item == 7)
                {
                    $("#u40_text").text(thing);
                }
                else if (item == 8)
                {
                    $("#u43_text").text(thing);
                }
                else if (item == 9)
                {
                    $("#u46_text").text(thing);
                }
                else if (item == 10)
                {
                    $("#u49_text").text(thing);
                }
                thing = 0;
                item++;
            }
        },
        function (xhr, status, error) {
            console.log('Error: ' + error);
            alert('Error connecting to the server.');
        });
    }
    else
    {
        ajaxCall('http://178.128.226.180:5050/yhacksapi/getData/', {'username' : localStorage['name'] }, 
        function(data) {
            data = data.message;
            console.log(data.bandages);
            document.getElementById("fuckthis").innerHTML = [
                "<table>",
                `<tr><td>bandages</td><td><input id="bandages" type="number" value=${data.bandages == null ? 0 : data.bandages}></td></tr>`,
                `<tr><td>examination_gloves</td><td><input id="examination_gloves" type="number" value=${data.examination_gloves == null ? 0 : data.examination_gloves}></td></tr>`,
                `<tr><td>scalpels</td><td><input id="scalpels" type="number" value=${data.scalpels == null ? 0 : data.scalpels}></td></tr>`,
                `<tr><td>iv_kits</td><td><input id="iv_kits" type="number" value=${data.iv_kits == null ? 0 : data.iv_kits}></td></tr>`,
                `<tr><td>masks</td><td><input id="masks" type="number" value=${data.masks == null ? 0 : data.masks}></td></tr>`,
                `<tr><td>needles</td><td><input id="needles" type="number" value=${data.needles == null ? 0 : data.needles}></td></tr>`,
                `<tr><td>vitamins</td><td><input id="vitamins" type="number" value=${data.vitamins == null ? 0 : data.vitamins}></td></tr>`,
                `<tr><td>dental_supplies</td><td><input id="dental_supplies" type="number" value=${data.dental_supplies == null ? 0 : data.dental_supplies}></td></tr>`,
                `<tr><td>optical_supplies</td><td><input id="optical_supplies" type="number" value=${data.optical_supplies == null ? 0 : data.optical_supplies}></td></tr>`,
                `<tr><td>personal_hygiene</td><td><input id="personal_hygiene" type="number" value=${data.personal_hygiene == null ? 0 : data.personal_hygiene}></td></tr>`,
                `<tr><td>antiseptics</td><td><input id="antiseptics" type="number" value=${data.antiseptics == null ? 0 : data.antiseptics}></td></tr>`,
                "</table>"
            ].join('\n')
        },
        
        function (xhr, status, error) {
            console.log('Error: ' + error);
            alert('Error connecting to the server.');
        });
    }
    
    ajaxCall('http://178.128.226.180:5050/yhacksapi/getData/', {'username' : localStorage['name'] }, 
        function(data) {
        //You can use any jQuery/JavaScript here!!!
            
        },
        function (xhr, status, error) {
            console.log('Error: ' + error);
            alert('Error connecting to the server.');
        });
    
    
});