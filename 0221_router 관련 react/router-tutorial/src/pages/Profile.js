import React from "react";
import { useParams } from "react-router";

const data = {
  velopert: {
    name: "Kim Bap",
    description: "리액트를 싫어하는 사람",
  },
  gildong: {
    name: "Jot Bap",
    description: "HTML를 싫어하는 사람",
  }
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div className='Profile'>
      <h1>사용자프로필</h1>
      {profile ?
       (<div className='user'><h2>name:{profile.name} </h2> <p>description : {profile.description}</p></div>) : 
       (<p>존재하지않는 프로필입니다.</p>)
       }
    </div>
  );
};

export default Profile;
