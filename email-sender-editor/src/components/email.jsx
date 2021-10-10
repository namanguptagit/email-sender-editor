import React from 'react'
import emailjs from "emailjs-com"
import {useState,useEffect} from 'react'
import axios from 'axios'
import "./editor.css"
function Email (){
    
    const [toggleButton, setToggleButton] = useState(false);
    const [input, setInput] = useState({
        name: '',
        rname: '',
        user_email: '',
        message: '' 
    })

    function handleChange(event){
    const {name, value} = event.target;
    setInput(prevInput => {
        return{
            ...prevInput,
            [name]: value
        }
    });
    }

    // function handleClick(event){
    //     event.preventDefault();
    //     console.log(input);
    //     event.preventDefault();
    //     emailjs.sendForm('service_qhxvpbc','template_395ab6m',event.target,'user_hMSXOwQqsDiffa4ULEg41').then(res=>{
    //         console.log(res);
    //     }).catch(err=> console.log(err));
    // }

    function sentEmail(e){
        e.preventDefault();

        const newData = {
            name:input.name,
            rname:input.rname,
            user_email:input.user_email,
            message:input.message
        }
        axios.post('http://localhost:3002/create', newData)

        console.log(input);
        emailjs.sendForm('service_qhxvpbc','template_395ab6m',e.target,'user_hMSXOwQqsDiffa4ULEg41').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    function saveControl(e){
        e.preventDefault();
        const newData = {
            name:input.name,
            rname:input.rname,
            user_email:input.user_email,
            message:input.message
        }
        axios.post('http://localhost:3002/create', newData)

        console.log(input);
    }
    const deleteDocument = async (_id) =>{
        try{
            const result = await emails.deleteOne(_id);
            console.log(result);
        }catch(err){
            console.log(err);
        }
    }
    function updateControl(e){
        e.preventDefault();
        
        deleteDocument(input._id);

        const newData = {
            name:input.name,
            rname:input.rname,
            user_email:input.user_email,
            message:input.message,
        }
        axios.post('http://localhost:3002/create', newData)

        console.log(input);
    }
    const [emails,setEmails] = useState([{
        name:'',
        rname:'',
        user_email:'',
        message:''
    }])
    const editItem = async (index)=>{
        // const item_edited = emails.find((currElem) =>{
        //     return currElem.id === index;
        // });
        // const item_edited = await emails.find({ _id: index});
        const item_edited = await emails.findOne({_id: index});
        console.log(item_edited);
        setInput(item_edited);
        console.log(input);
        setToggleButton(true);
      };
    
    useEffect(()=>{
        fetch("/emails").then( res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setEmails(jsonRes));
    })
    return (
        <div className="container border" style={{marginTop:"50px",width:"50%",
        backgroundImage:`url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg')`,
        backgroundPosition:'center',
        backgroundSize:"cover"
        }}>
            <h1 style={{marginTop:'25px',textAlign:"center"}}>Email Sender and Editor</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sentEmail}>
                <label >Name</label>
                <input onChange={handleChange} type="text" name="name" value={input.name} className="form-control" placeholder="Enter your name"/>
                <label >Reciever Name</label>
                <input onChange={handleChange} type="text" name="rname" value={input.rname} className="form-control" placeholder="Enter recievers name"/>
                <label >Reciever Email</label>
                <input onChange={handleChange} type="email" name="user_email" value={input.user_email} className="form-control" placeholder="Enter recievers email"/>
                <label >Message</label>
                <textarea onChange={handleChange} name="message" rows="4" value={input.message} className="form-control" placeholder="Enter the message"></textarea>
                {
                toggleButton ? 
                <input  type="" placeholder="update"className="form-control btn btn-primary" style={{marginTop:"30px"}} onClick={updateControl} />
                :
                <input  type="" placeholder="save" className="form-control btn btn-primary" style={{marginTop:"30px"}} onClick={saveControl} />
                }
                {
                toggleButton ?
                <input  type="submit" value='send and update' className="form-control btn btn-primary" style={{marginTop:"30px"}} />
                :
                <input  type="submit" value='send' className="form-control btn btn-primary" style={{marginTop:"30px"}} />
                }
            </form>
            <div className="container">
         <h1>Email Saved Templates</h1>
        {emails.map((email,index) =>{
        return(
        <div className="eachItem" key={email.id}>
        <h5>Senders Name : {email.name}</h5>
        <h5>Recievers Name : {email.rname}</h5>
        <h5>Recievers Email : {email.user_email}</h5>
        <h5>Message : {email.message}</h5>
        <div className="todo-btn" key={email.id} > 
            
        <i className="far fa-edit add-btn " onClick={()=>editItem(email.id)}></i>
        </div>
        
         </div>)}
         )}
    </div>
            
        </div>
    )
}

export default Email
