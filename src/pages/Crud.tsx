import React, { useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { addUser, cruddlistdata, deleteUser, updateUsername} from '../store/CrudSlice'

export const Crud = () =>{

    const dispatch = useDispatch();
    const { value } = useSelector(cruddlistdata);

    const[name, setName]=useState('');
    const[lastname, setLastname]=useState('');
    const [newUsername, setNewUsername] = useState('');

console.log(name)

    const Users = (props: any)=>{
        const list = props.value.map((v:any)=>
            <div key={v.id}>
                <h1>{v.name}</h1>
                <h1>{v.lastname}</h1>
                <button
                onClick={() => {
                  dispatch(deleteUser({ id: v.id }));
                }}
              >
                Delete User
              </button>

              <input
                type="text"
                placeholder="New Username..."
                onChange={(e) => {
                  setNewUsername(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: v.id, lastname: newUsername })
                  );
                }}
              >
                atualizar
              </button>
            </div>
        )
        return(
            <div>
                {list}
            </div>
        )

    }

    return(
        <>
          <div>
              <input type={'text'} 
              placeholder="name" 
              onChange={ (e) => setName(e.target.value)}/>

              <input type={'text'} 
              placeholder="last name" 
              onChange={ (e) => setLastname(e.target.value)}/>
                
              <button onClick={() => dispatch(addUser({ id:value[value.length-1].id + 1,
                name, 
                lastname}))}>Adicionar</button>


          </div><br/>

          <Users  value={value}/>
           
        
        
        </>
    )
}

export default Crud;