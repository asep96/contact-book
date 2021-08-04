let contacts = [
    {
        "name": "Brad",
        "phoneNumber": "123456",
        "emailAddress": "brad@gmail.com"
    },
    {
        "name": "Jeff",
        "phoneNumber": "456678",
        "emailAddress": "jeff@gmail.com"
    },
    {
        "name": "Mary",
        "phoneNumber": "985561",
        "emailAddress": "mary@gmail.com"
    },
    {
        "name": "Brittany",
        "phoneNumber": "348541",
        "emailAddress": "brittany@gmail.com"
    },
    {
        "name": "Alexander",
        "phoneNumber": "345623456",
        "emailAddress": "alex@gmail.com"
    },
    {
        "name": "Mark",
        "phoneNumber": "985561",
        "emailAddress": "mark@gmail.com"
    },
    {
        "name": "Larry",
        "phoneNumber": "956785125121",
        "emailAddress": "Larry@gmail.com"
    },
    {
        "name": "Tom",
        "phoneNumber": "90518012",
        "emailAddress": "tom@gmail.com"
    },
]

//produce divs for each contact and its information
function produceContacts() {
    let i;
    for(i=0; i<contacts.length; i++) {
        let contactDiv = document.createElement("div");
        contactDiv.setAttribute("id", i)
        contactDiv.setAttribute("class", "contact-card")
        
        let nameInfo = document.createElement("p");
        nameInfo.innerHTML = contacts[i]["name"];
        nameInfo.setAttribute("class", "name-info");

        let phoneInfo = document.createElement("p");
        phoneInfo.innerHTML = contacts[i]["phoneNumber"];
        phoneInfo.setAttribute("class", "phone-info");
        
        let emailInfo = document.createElement("p");
        emailInfo.innerHTML = contacts[i]["emailAddress"];
        emailInfo.setAttribute("class", "email-info");

        let deleteButton = document.createElement("BUTTON");
        deleteButton.innerHTML = "x";
        deleteButton.type="submit";
        deleteButton.name="delete-button";
        deleteButton.setAttribute("class", "delete-button");

        let updateButton = document.createElement("BUTTON");
        updateButton.innerHTML = "UPDATE";
        updateButton.name="update-button";
        updateButton.setAttribute("class", "update-button");

        let brTag1 = document.createElement("br");
        let brTag2 = document.createElement("br");
        let brTag3 = document.createElement("br");


        
        document.getElementById("contact-card-container").appendChild(contactDiv);
        document.getElementById(i).appendChild(deleteButton);
        document.getElementById(i).appendChild(nameInfo);
        document.getElementById(i).appendChild(brTag1);
        document.getElementById(i).appendChild(phoneInfo);
        document.getElementById(i).appendChild(brTag2);
        document.getElementById(i).appendChild(emailInfo);
        document.getElementById(i).appendChild(brTag3);
        document.getElementById(i).appendChild(updateButton);

        //update button event
        updateButton.addEventListener("click", function() {
            updateContact(this.parentElement.id);
        })
        //delete button event
        deleteButton.addEventListener("click", function() {
            deleteContact(this.parentElement.id);
        })
    }
}

function addContact(addName, addPhoneNumber, addEmail) {
    const form = document.getElementById("add-contact-form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    //remove contact list from view
    removeContactsFromView();
    //search to see if contact is already listed
    let contactAlreadyExists = false;
    let j;
    for(j=0; j<contacts.length; j++) {
        if(contacts[j]["name"] == addName){
            alert("Contact is already listed!")
            contactAlreadyExists = true;
        }
    }
    //make sure form is completely filled
    if(addName == "" || addPhoneNumber == "" || addEmail == "") {
        alert("Please fill out the contact form completely")
    }
    //add contact to list
    if(addName != "" && addPhoneNumber != "" && addEmail != "" && contactAlreadyExists == false){
        contacts.push({
            "name": addName,
            "phoneNumber": addPhoneNumber,
            "emailAddress": addEmail
        });
    }
    //reload all contacts
    produceContacts();
}

//delete contact 
function deleteContact(deleteContactId) {
    // remove contact list from view
    removeContactsFromView()
    //remove contact from array
    contacts.splice(deleteContactId, 1);
    //reload all contacts
    produceContacts();
}

function updateContact(updateContactId) {
    //get input from user
    let updateName = prompt("Enter correct name: ");
    let updatePhoneNumber = prompt("Enter correct phone number: ")
    let updateEmail = prompt("Enter correct email: ");
    //values stay same if is empty
    removeContactsFromView();
    if(updateName != "" && updateName != null){
        contacts[updateContactId]["name"] = updateName;
    }
    if(updatePhoneNumber != "" && updatePhoneNumber != null) {
        contacts[updateContactId]["phoneNumber"] = updatePhoneNumber;
    }
    if(updateEmail != "" && updateEmail != null){
        contacts[updateContactId]["emailAddress"] = updateEmail;
    }
    produceContacts();
}

//removes the contacts so that the list can be manipulated without the user refreshing
function removeContactsFromView() {
    let k;
    for(k=0; k<contacts.length; k++) {
        let existingContactDivs = document.getElementById(k);
        existingContactDivs.remove();
    }
}

produceContacts();