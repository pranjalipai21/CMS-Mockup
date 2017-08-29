var EditingRecordId;
window.onload=function(){
  paintContactsList();
}
paintContactsList = function(){
  $("#list_div").empty();
    var listHTML = '';
  for (var i = 0; i < contactsArray.length; i++) {
        listHTML += '<li class="list-group list-group-flush" ><a data-toggle="modal" data-target="#viewModal" href="#viewModal" class="list-group-item list-group-item-action" onclick="showIndividualRecordForView('+contactsArray[i].id+',event)"><div class="media" id="srchdiv"><img class="d-flex mr-3 rounded-circle" src="'+contactsArray[i].profilePic+'" alt=""><div class="media-body"><label> '+contactsArray[i].FirstName+" "+contactsArray[i].LastName+'</label><div class="text-muted small"><label style="display:none;">'+contactsArray[i].CompanyName+'</label><label style="display:none;">'+contactsArray[i].JobTitle+'</label> <label style="display:none;">'+contactsArray[i].State+'</label> <label style="display:none;">'+contactsArray[i].City+'</label> <label style="display:none;">'+contactsArray[i].Zip+'</label> </div></div><button type="button" class="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#updateModal" style="padding:" onclick="showIndividualRecordForEdit('+contactsArray[i].id+',event)">Edit</button></div></a></li>';
}
  $("#list_div").append(listHTML);
}
showIndividualRecordForView = function(id,event){
  showIndividualRecord(id,event);
  $("#viewModal").modal("show");
  event.stopPropagation();
}
showIndividualRecordForEdit = function(id,event){
  EditingRecordId = id;
  showIndividualRecord(id,event);
  $("#updateModal").modal("show");
  event.stopPropagation();
}
function showIndividualRecord(id,event){
    var individualElement = contactsArray.filter(function(ele){
    	return ele.id == id;
    });
    $("#fname").val(individualElement[0].FirstName);
    $("#lname").val(individualElement[0].LastName);
    $("#compname").val(individualElement[0].CompanyName);
    $("#jobtle").val(individualElement[0].JobTitle);
    $("#email").val(individualElement[0].EmailAddress);
    $("#address").val(individualElement[0].StreetAddress);
    $("#city1").val(individualElement[0].City);
    $("#state1").val(individualElement[0].State);
    $("#zip1").val(individualElement[0].Zip);
    $("#phonenumber").val(individualElement[0].PrimaryPhoneNumber);
    $("#fnumber").val(individualElement[0].FaxNumber);
    $("#mnumber").val(individualElement[0].MobileNumber);
    $("#notes1").val(individualElement[0].NotesSection); 
    $("#firstname").text(individualElement[0].FirstName);
    $("#lastname").text(individualElement[0].LastName);
    $("#companyname").text(individualElement[0].CompanyName);
    $("#jobtitle").text(individualElement[0].JobTitle);
    $("#emailaddress").text(individualElement[0].EmailAddress);
    $("#streetaddress").text(individualElement[0].StreetAddress);
    $("#city").text(individualElement[0].City);
    $("#state").text(individualElement[0].State);
    $("#zip").text(individualElement[0].Zip);
    $("#primaryphonenumber").text(individualElement[0].PrimaryPhoneNumber);
    $("#faxnumber").text(individualElement[0].FaxNumber);
    $("#mobilenumber").text(individualElement[0].MobileNumber);
    $("#notes").text(individualElement[0].NotesSection);
}
saveRecord = function(){
  for(var i=0;i<contactsArray.length;i++){
      if(contactsArray[i].id == EditingRecordId){
        contactsArray[i].FirstName = $("#fname").val().trim();
        contactsArray[i].LastName = $("#lname").val().trim();
        contactsArray[i].CompanyName = $("#compname").val().trim();
        contactsArray[i].JobTitle = $("#jobtle").val().trim();
        contactsArray[i].EmailAddress = $("#email").val().trim();
        contactsArray[i].StreetAddress = $("#address").val().trim();
        contactsArray[i].City = $("#city1").val().trim();
        contactsArray[i].State = $("#state1").val().trim();
        contactsArray[i].Zip = $("#zip1").val().trim();
        contactsArray[i].PrimaryPhoneNumber = $("#phonenumber").val().trim();
        contactsArray[i].FaxNumber = $("#fnumber").val().trim();
        contactsArray[i].MobileNumber = $("#mnumber").val().trim();
        contactsArray[i].Notes = $("#notes1").val().trim();
      }
  }
  $("#updateModal").modal("hide");
  paintContactsList();
}
var contactsArray = [
   			{
   				"id" : "1",
          "profilePic":"images/b1.png",
   				"FirstName" : "Piyush",
   				"LastName" : "Zode",
   				"CompanyName" : "Revelation",
   				"JobTitle" : "Developer",
   				"EmailAddress" : "piyush.zode@revelation.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},{
   				"id" : "2",
                "profilePic":"images/b2.png",
   				"FirstName" : "David",
   				"LastName" : "Miller",
   				"CompanyName" : "Google",
   				"JobTitle" : "Analyst",
   				"EmailAddress" : "david.miller@google.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Arlington",
   				"State" : "Texas",
   				"Zip" : "76010",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
    {
   				"id" : "3",
                "profilePic":"images/w1.png",
   				"FirstName" : "Danny",
   				"LastName" : "Miller",
   				"CompanyName" : "Github",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "danny.miller@github.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "New York",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
    {
   				"id" : "4",
                "profilePic":"images/b1.png",
   				"FirstName" : "Harry",
   				"LastName" : "Potter",
   				"CompanyName" : "Hogwarts",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "harry.potter@hogwarts.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "56479",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
       {
   				"id" : "5",
                "profilePic":"images/b2.png",
   				"FirstName" : "Chandler",
   				"LastName" : "Bing",
   				"CompanyName" : "Apple",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "chandler@apple.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Warsaw",
   				"State" : "Indiana",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
       {
   				"id" : "6",
                "profilePic":"images/w2.png",
   				"FirstName" : "Bonnie",
   				"LastName" : "Wheeler",
   				"CompanyName" : "Boomer Jacks",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "ben.wheeler@bjs.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
       {
   				"id" : "7",
                "profilePic":"images/w1.png",
   				"FirstName" : "Ann",
   				"LastName" : "Stuart",
   				"CompanyName" : "Amazon",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "harry.potter@hogwarts.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
       {
   				"id" : "8",
                "profilePic":"images/w2.png",
   				"FirstName" : "Ester",
   				"LastName" : "Barnes",
   				"CompanyName" : "Logitech",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "ester.barnes@logitech.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
    
       {
   				"id" : "9",
                "profilePic":"images/b1.png",
   				"FirstName" : "Jon",
   				"LastName" : "Snow",
   				"CompanyName" : "Microsoft",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "jon.snow@microsoft.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "87909",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			},
    
       {
   				"id" : "10",
                "profilePic":"images/w1.png",
   				"FirstName" : "Jane",
   				"LastName" : "Doe",
   				"CompanyName" : "Dell",
   				"JobTitle" : "dummy job",
   				"EmailAddress" : "jane.Doe@hogwarts.com",
   				"StreetAddress" : "312 Miller Avenue",
   				"City" : "Valparaiso",
   				"State" : "Indiana",
   				"Zip" : "11111",
   				"PrimaryPhoneNumber" : "1234567890",
   				"FaxNumber" : "1234567890",
   				"MobileNumber" : "1234567890",
   				"NotesSection" : "Notes"
   			}
    
];


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, j,presentBool;
    input = document.getElementById('myInput');
    //if(input.value.length > 2){
      filter = input.value.toUpperCase();
    ul = document.getElementById("list_div");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("label");
      if(a){
        presentBool = false;
          for(j = 0; j<a.length;j++){
          if (a[j].innerHTML.toUpperCase().indexOf(filter) > -1 ) {
            presentBool = true;
           }
        }
        if(presentBool){
          li[i].style.display = "block";
        }else {
           li[i].style.display = "none";
          }        
       }
        else {
            li[i].style.display = "none";
        }
      }
    // }else if(input.value.length == 0){
    //     ul = document.getElementById("list_div");
    //     li = ul.getElementsByTagName('li');
    //     for (i = 0; i < li.length; i++) {
    //     li[i].style.display = "block";
    //   }
    // }
}