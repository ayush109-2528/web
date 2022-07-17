import{getDatabase,ref,set,child,} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

var namev, emailv, messagev;
const db = getDatabase();

var Name= document.getElementById("name");
var Email= document.getElementById("email");
var Message= document.getElementById("message");


function insertData(event)
{
    event.preventDefault();
    readFormData();
    if(namev==""&& emailv==""&& messagev=="")
    {
        alert("Fields cannot be blank")
    }
    else
    {
        set(ref(db, "data/" + namev), {
            name: namev,
            email: emailv,
            message: messagev,
        })
        .then(() => {
            alert("data store successfully");
        })
        .catch((error) => {
            alert("Unsuccessful", error);
        });
    }
    clearFormData();
}
function readFormData()
{
    namev = Name.value;
    emailv = Email.value;
    messagev = Message.value;
    console.log(namev,emailv,messagev);
}
function clearFormData()
{
    Name.value="";
    Email.value="";
    Message.value="";
}
document.querySelector('.btn').onclick = insertData;