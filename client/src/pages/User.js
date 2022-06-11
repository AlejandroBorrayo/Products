import React,{useState,useEffect} from 'react'
import "./User.css"
import ModalEditProfile from "../components/Modal/modalEditProfile"
import axios from "axios"

export const User = (props) => {
    const [user, setUser] = useState(props.user)
    
    useEffect(()=>{
          axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/${props.user._id}`)
          .then(data=>setUser(data.data))
          .catch(err=>console.log(err)) 
      })
    
  return (
    <div className='Perfil'>
        <div  style={{"marginBottom":"40px"}} className='divPerfil'>
            <div className='MostrarDatos'>
                <img style={{"width":"8%"}} src={props.user.avatar} alt ="Profile"/>
                <div className='divDescription'>
                    <p>Usuario</p>
                    <p>{user.username}</p>
                </div>
                
                <div className='divDescription'>
                    <p>E-mail</p>
                    <p>{user.email}</p>
                </div>
                <div className='divDescription'>
                    <p>Telefono</p>
                    <p>{user.number}</p>
                </div>
                <div className='divDescription'>
                  <p>Dirección</p>
                  <p>{`${user.address} - ${user.city}-${user.country}`}</p>
                  <div className='divCountry'>
                  </div>
                </div>
                <ModalEditProfile user={user}/>


                

            </div>
        </div>
    </div>
  )
}
