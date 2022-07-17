import {getDatabase, ref, get, set, update, remove, child,} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

var rollV, nameV, genderV, addressV;
const db =getDatabase();



var RollBox = document.getElementById("rollBox");
var NameBox = document.getElementById("nameBox");
var GenBox = document.getElementById("genBox");
var AddBox = document.getElementById("addBox");



function insertData(event)
{
    event.preventDefault();
    readFormData();
    if(rollV==""&& nameV==""&& genderV==""&& addressV=="")
    {
        alert("fields cannont be blank");
    }
    else{
    set(ref(db, "data/" + rollV), {
        rollNo: rollV, 
        name: nameV,
        gender: genderV,
        address: addressV,
    })
    .then(() => {
        alert("Data Stored Successfully");
    })
    .catch((error)=> {
        alert("Unsuccessful", error);
    });
    }
    clearFormData();
    // console.log("btn clicked");
}
function readData(event)
{
    event.preventDefault();
    readFormData();
    const dbref = ref(db);
    get(child(dbref, "data/"+ rollV)).then((snapshot)=>{
        if(snapshot.exists())
        {
            // RollBox.value = snapshot.val().rollNo;
            NameBox.value = snapshot.val().name;
            GenBox.value = snapshot.val().gender;
            AddBox.value = snapshot.val().address;
        }
        else{
            alert("No data found");
        }
    })
    .catch((error)=> {
        alert("Unsuccessful", error);
    });
    // clearFormData();
    // console.log("btn clicked");
}
function updateData(event)
{
    event.preventDefault();
    readFormData();
    update(ref(db, "data/" + rollV), {
        name: nameV,
        gender: genderV,
        address: addressV,
    })
    .then(() => {
        alert("Data update Successfully");
    })
    .catch((error)=> {
        alert("Unsuccessful", error);
    });
    clearFormData();
    // console.log("btn clicked");
}
function deleteData(event)
{
    event.preventDefault();
    readFormData();
    if(rollV==""&& nameV==""&& genderV==""&& addressV=="")
    {
        alert("fields cannont be blank");
    }
    else{
    if(confirm("are you sure to delete this data?"))
    {
    remove (ref(db, "data/" + rollV)) 
    .then(() => {
        alert("Data delete Successfully");
    })
    .catch((error)=> {
        alert("Unsuccessful", error);
    });
    }
    }
    clearFormData();
    // console.log("btn clicked");
}


function readFormData()
{
    rollV = RollBox.value;
    nameV = NameBox.value;
    genderV = GenBox.value;
    addressV = AddBox.value;
    console.log(rollV, nameV, genderV, addressV);
}

// var rollV, nameV, genderV, addressV;
function clearFormData()
{
    RollBox.value="";
    NameBox.value="";
    GenBox.value="";
    AddBox.value="";
    // console.log(rollV,nameV,genderV,addressV);
}
document.querySelectorAll('.btn')[0].onclick = insertData;
document.querySelectorAll('.btn')[1].onclick = readData;
document.querySelectorAll('.btn')[2].onclick = updateData;
document.querySelectorAll('.btn')[3].onclick = deleteData;
// readFormData();