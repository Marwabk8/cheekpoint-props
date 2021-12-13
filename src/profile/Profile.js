import propTypes from 'prop-types'


function Profile ({fullname,proffession,bio,handlname,children,message}) {

    return (
        <div>

<h1 style= {{color:"red"}}>{fullname}</h1>
<h2 style= {{color:"blue"}}> {proffession}</h2>
<p style= {{fontFamily:"serif",fontSize:"20px"}}>{bio} </p>
{ message ? <><h1>{fullname}</h1>
</> :<button style= {{color:"blue",backgroundColor: "lightblue",padding: "10px"}} onClick={()=>handlname(fullname)} >Button</button>
}

{children}
        </div>


    )
}
Profile.defaultProps={
    Profile:"Marwa"
}
Profile.propTypes={ 
    fullname : propTypes.string,
    bio: propTypes.string,
    handlname :propTypes.func,
    message :propTypes.func
   

    }


export default Profile