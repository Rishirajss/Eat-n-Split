import React from 'react'
import Friendslist from './Friendslist'

export default function Friend({initFriends, onSelected, onselectedFriend}) {
    
  return (
    <>   
        <ul>
            {initFriends.map((fri)=>(
                <Friendslist listing={fri} key={fri.id} onSelection={onSelected} onselectedFriend={onselectedFriend}/>
            ))}
        </ul>
    </>
  )
}
