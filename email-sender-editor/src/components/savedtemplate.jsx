import React, {useEffect , useState} from 'react'
import "./editor.css";
import axios from 'axios';


function Savedtemplate () {
    const [isEditItem , setIsEditItem] =useState("");
    const [editedMessage , setEditedMessage] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    const [emails,setEmails] = useState([{
        name:'',
        rname:'',
        user_email:'',
        message:''
    }])
    const editItem=(index)=>{
        const item_edited = emails.find((currElem) =>{
            return currElem.id === index;
        });
        setEditedMessage(item_edited.message);
        setIsEditItem(index);
        setToggleButton(true);
      };
    useEffect(()=>{
        fetch("/emails").then( res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setEmails(jsonRes));
    })

    return <div className="container">
         <h1>Email Saved Templates</h1>
        {emails.map(email =>
        <div>
        <div className="eachItem" key={email.id}>
        <h5>Senders Name : {email.name}</h5>
        <h5>Recievers Name : {email.rname}</h5>
        <h5>Recievers Email : {email.user_email}</h5>
        <h5>Message : {email.message}</h5>
        <div className="todo-btn">
            
        <i class="far fa-edit add-btn " onClick={()=>editItem(email.id)}></i>
        </div>
        </div>
         </div>
         )}
    </div>
}

export default Savedtemplate
