import React from 'react'
import emailjs from "emailjs-com"
import {useState} from 'react'
import axios from 'axios'
function Email (){
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
    return (
        <div className="container border" style={{marginTop:"50px",width:"50%",
        backgroundImage:`url('https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg')`,
        backgroundPosition:'center',
        backgroundSize:"cover"
        }}>
            <h1 style={{marginTop:'25px'}}>Email Sender and Editor</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sentEmail}>
                <label >Name</label>
                <input onChange={handleChange} type="text" name="name" value={input.name} className="form-control"/>
                <label >Reciever Name</label>
                <input onChange={handleChange} type="text" name="rname" value={input.rname} className="form-control"/>
                <label >Reciever Email</label>
                <input onChange={handleChange} type="email" name="user_email" value={input.user_email} className="form-control"/>
                <label >Message</label>
                <textarea onChange={handleChange} name="message" rows="4" value={input.message} className="form-control"></textarea>
                <input  type="submit" value='send' className="form-control btn btn-primary" style={{marginTop:"30px"}} />
            </form>
            {/* <input type="submit" value='Edit existing template' className="form-control btn btn-primary" style={{marginBottom:"40px"}} /> */}
        </div>
    )
}

export default Email
