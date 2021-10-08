import React, {useEffect , useState} from 'react'

function Editor () {
    const [emails,setEmails] = useState([{
        name:'',
        rname:'',
        user_email:'',
        message:''
    }])

    useEffect(()=>{
        fetch("/emails").then( res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setEmails(jsonRes));
    })

    return <div className="container">
        <h1>editor</h1>
        {emails.map(email =>
        <div>
        <h1>{email.name}</h1>
        <h1>{email.rname}</h1>
        <p>{email.user_email}</p>
        <p>{email.message}</p>
         </div>
         )}
        
    </div>
}

export default Editor
