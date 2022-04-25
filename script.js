var contactList = [
    {
        id: "1",
        Name: "Guilherme",
        LastName: "Henrique",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Famoso boinguilherme",
    },
    {
        id: "2",
        Name: "Gabriel",
        LastName: "Bernardo",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Insigne Merlezinho",
    },
    {
        id: "3",
        Name: "Júlio",
        LastName: "Cézar",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Famigerado Cezinha",
    },
    {
        id: "4",
        Name: "Pablo",
        LastName: "Ricardo",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Renomado Pazera",
    },
    {
        id: "5",
        Name: "Rafael",
        LastName: "Paul",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Popular Rafa",
    },
    {
        id: "6",
        Name: "Igor",
        LastName: "Ribas",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Inesquecível Igor",
    },
    {
        id: "7",
        Name: "Gustavo",
        LastName: "Schapitz",
        Email: "email@mail.com",
        Phone: "(47) 9 9697-48747",
        AltPhone: "(47) 3453-4877",
        Description: "Admirável Guto",
    },
];

window.onload = function () {
    tableGenerator();
}

function GRUDContacts(type, manipulatedID) {
    var manipulatedArray = ''
    switch (type) {
        case (type = "new"):
            $("#nav-form-tab").click();
            document.getElementById("NameInput").value = '';
            document.getElementById("NameInput").removeAttribute("readonly");
            document.getElementById("LastNameInput").value = '';
            document.getElementById("LastNameInput").removeAttribute("readonly");
            document.getElementById("EmailInput").value = '';
            document.getElementById("EmailInput").removeAttribute("readonly");
            document.getElementById("PhoneInput").value = '';
            document.getElementById("PhoneInput").removeAttribute("readonly");
            document.getElementById("AltPhoneInput").value = '';
            document.getElementById("AltPhoneInput").removeAttribute("readonly");
            document.getElementById("DescriptionTextArea").value = '';
            document.getElementById("DescriptionTextArea").removeAttribute("readonly");
            document.getElementById("submitButton").removeAttribute("disabled");
            document.getElementById("submitButton").setAttribute("onclick", "GRUDContacts('confirmNew')");
            break
        case (type = "confirmNew"):

            var someone = {
                id: 1 + contactList.length,
                Name: document.getElementById("NameInput").value,
                LastName: document.getElementById("LastNameInput").value,
                Email: document.getElementById("EmailInput").value,
                Phone: document.getElementById("PhoneInput").value,
                AltPhone: document.getElementById("AltPhoneInput").value,
                Description: document.getElementById("DescriptionTextArea").value,
            };

            if (contactList.length !== 0) {
                var lastPerson = contactList.length;
                if (contactList[lastPerson - 1].Name != someone.Name) {
                    contactList.push(someone);
                    tableGenerator();
                    ShowModalId("CreatedModal");
                } else {
                    ShowModalId("FailModal");
                }
            } else {
                contactList.push(someone);
                tableGenerator();
                ShowModalId("CreatedModal");
            }

            GRUDContacts('new',)

            break;
        case (type = "edit"):
            document.getElementById("submitButton").setAttribute("onclick", "GRUDContacts('confirmEdit'," + manipulatedID + ")"
            );

            contactList.forEach((contact, index) => {
                if (contact.id == manipulatedID) {
                    manipulatedArray = index
                }
            })

            $("#nav-form-tab").click();
            document.getElementById("NameInput").value = contactList[manipulatedArray].Name;
            document.getElementById("NameInput").removeAttribute("readonly");

            document.getElementById("LastNameInput").value = contactList[manipulatedArray].LastName;
            document.getElementById("LastNameInput").removeAttribute("readonly");

            document.getElementById("EmailInput").value = contactList[manipulatedArray].Email;
            document.getElementById("EmailInput").removeAttribute("readonly");

            document.getElementById("PhoneInput").value = contactList[manipulatedArray].Phone;
            document.getElementById("PhoneInput").removeAttribute("readonly");

            document.getElementById("AltPhoneInput").value = contactList[manipulatedArray].AltPhone;
            document.getElementById("AltPhoneInput").removeAttribute("readonly");

            document.getElementById("DescriptionTextArea").value = contactList[manipulatedArray].Description;
            document.getElementById("DescriptionTextArea").removeAttribute("readonly");

            document.getElementById("submitButton").removeAttribute("disabled");


            break;
        case (type = "confirmEdit"):

            contactList.forEach((contact, index) => {
                if (contact.id == manipulatedID) {
                    manipulatedArray = index
                }
            })



            contactList[manipulatedArray] = {
                id: manipulatedID,
                Name: document.getElementById("NameInput").value,
                LastName: document.getElementById("LastNameInput").value,
                Email: document.getElementById("EmailInput").value,
                Phone: document.getElementById("PhoneInput").value,
                AltPhone: document.getElementById("AltPhoneInput").value,
                Description: document.getElementById("DescriptionTextArea").value,
            };

            tableGenerator();
            ShowModalId("EditedModal");
            GRUDContacts("new", "");

            break;
        case (type = "detail"):
            contactList.forEach((contact, index) => {
                if (contact.id == manipulatedID) {
                     manipulatedArray = index
                }
                })
            $("#nav-form-tab").click();
            document.getElementById("NameInput").value = contactList[manipulatedArray].Name;
            document.getElementById("NameInput").setAttribute("readonly", true);

            document.getElementById("LastNameInput").value = contactList[manipulatedArray].LastName;
            document.getElementById("LastNameInput").setAttribute("readonly", true);

            document.getElementById("EmailInput").value = contactList[manipulatedArray].Email;
            document.getElementById("EmailInput").setAttribute("readonly", true);

            document.getElementById("PhoneInput").value = contactList[manipulatedArray].Phone;
            document.getElementById("PhoneInput").setAttribute("readonly", true);

            document.getElementById("AltPhoneInput").value = contactList[manipulatedArray].AltPhone;
            document.getElementById("AltPhoneInput").setAttribute("readonly", true);

            document.getElementById("DescriptionTextArea").value = contactList[manipulatedArray].Description;
            document.getElementById("DescriptionTextArea").setAttribute("readonly", true);

            document.getElementById("submitButton").setAttribute("disabled", true);


            break;
        case (type = "remove"):
            let indexRemove = 0
            var toremove = []
            var checkboxes = document.getElementsByClassName('form-check-input')
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked == true && i != 0 && i != null) {
                    toremove[indexRemove] = checkboxes[i].value
                    indexRemove = indexRemove + 1
                }
            }
            GRUDContacts('confirmRemove', toremove);


            break;
        case (type = "confirmRemove"):
            console.log(manipulatedID.constructor);

            if (manipulatedID.constructor === Array) {
                manipulatedID.forEach((idToRemove) => {
                    contactList.forEach((contact, index) => {
                        if (contact.id == idToRemove) {
                            contactList.splice(index, 1);
                        }
                    })
                })
            } else {
                contactList.forEach((contact, index) => {
                    if (contact.id == manipulatedID) {
                        contactList.splice(index, 1);
                    }
                }
                )
            }

            tableGenerator()
            break;
    }
}

function ShowModalId(ModalID) {
    $("#" + ModalID + "").modal("show");
}

function tableGenerator() {
    var tablerow = ``;
    contactList.forEach((value) => {
        tablerow += `<tr>
        <td>
        <input class="form-check-input" type="checkbox" value="${value.id}">
        </td>
        <td>
        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="GRUDContacts('confirmRemove','${value.id}')">
        <span class="oi oi-pencil"></span>Remove</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="GRUDContacts('edit','${value.id}')">
        <span class="oi oi-pencil"></span>Edit</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="GRUDContacts('detail','${value.id}')">
        <span class="oi oi-pencil"></span>Detail</button>
        </td>
        <td>${value.id}</td>
        <td>${value.Name}</td>
        <td>${value.LastName}</td>
        <td>${value.Email}</td>
        <td>${value.Phone}</td>
        <td>${value.AltPhone}</td>
        <td>${value.Description}</td>
        </tr>`
    });
    document.getElementById("answer").innerHTML = tablerow;
}

function getMask(id) {
    $("#" + id).mask("(00) 0 0000-0000")
}
