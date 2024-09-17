import React, { useState } from 'react'
import Button from './Button'

export default function Friendfrom({showFrm, onfriendsadd}) {
  
  let [name, setname] = useState('');
  let[image, setimage] = useState('https://i.pravatar.cc/48')
  
  function handlesubmit(e){
    e.preventDefault();

    if(!name || !image) return;

    let id = crypto.randomUUID();

    let newFriend = {
        id,
        name,
        image: `${image}?=${id}`,
        balance: 0,
    }
    console.log(newFriend);
    onfriendsadd(newFriend);
    setname('');
    setimage('https://i.pravatar.cc/48');
  }
  return (
    <>  
      {
        showFrm === false 
        ?
        ""
        :
       <form className="form-add-friend" onSubmit={handlesubmit}>
             <label>🫂Friend name</label>   
             <input type="text" value={name} onChange={(e)=> setname(e.target.value)}/>
             
             <label>🖼️Image Url</label>
             <input type="text" value={image} onChange={(e)=> setimage(e.target.value)}/>

             <Button>Add</Button>
       </form>  
      }
    </>
  )
}
