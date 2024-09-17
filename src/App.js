import React, { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
import Friendfrom from "./Friendfrom";
import Fromsplitbill from "./Fromsplitbill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  let [showfrnd, setShowfrnd] = useState(false);
  let [friends, setfriends] = useState(initialFriends);
  let [selectedFriend, getSelectedFriend] = useState(null);

  function handleshowfrnd(){
    setShowfrnd(!showfrnd);
    getSelectedFriend(null);
  }

  function handleAddFriend(friend){
      setfriends((friends)=> [...friends, friend]);
      setShowfrnd(false);
  }

  function handleSelected(friend){
      // getSelectedFriend(friend);
      getSelectedFriend(curr => curr?.id === friend.id ? null : friend);
      setShowfrnd(false); 
  }
  
  function handleSplitbill(value){
    console.log(friends);
      setfriends((friends) => friends.map((friend) => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));
      getSelectedFriend(null);
  }
  return (
    <div className="app">
        <div className="sidebar">
            <Friend initFriends={friends} onSelected={handleSelected} onselectedFriend={selectedFriend}/> 
            {showfrnd && <Friendfrom onfriendsadd={handleAddFriend}/>}
            <Button onClick={handleshowfrnd}>
               {showfrnd ? 'close' : 'Add friend'}
            </Button>
        </div>
        {selectedFriend && <Fromsplitbill selectedFriend={selectedFriend} onSplitBill={handleSplitbill}/>}
    </div>
  );
}

export default App;
