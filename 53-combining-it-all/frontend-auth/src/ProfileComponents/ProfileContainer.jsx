import React from 'react';
import NewSandwichForm from './NewSandwichForm'

import {connect} from 'react-redux'

const ProfileContainer = (props) => {

  return (
    <div>
      <h2>{props.user.username}&apos;s Profile</h2>
      <h3>Sandwiches</h3>

      <ol>
       {
         props.user.sandwiches
          &&
         props.user.sandwiches.map(sand=> {return <li key={sand.review_id}>{sand.name}</li>})
        }
      </ol>
      <NewSandwichForm/>
     </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.userInfo.user
  }
}














export default connect(mapStateToProps)(ProfileContainer);
