import React from 'react'

function Props(props) {
//  const {name, gender} =users;
//  const {childName, childGender} =users.childUser;
 const {name, gender} =props;
 const {childName, childGender} =props.childUser;
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {childName}
    childUser gender : {childGender}
    </h2>
    <h2>
    props : text : {props.text}
    </h2>
    </div>
  )
}

export default Props
