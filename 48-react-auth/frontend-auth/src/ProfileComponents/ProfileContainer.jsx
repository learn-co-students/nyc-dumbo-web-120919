import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {
    let {user:{snacks, username}} = this.props

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Snacks</h3>

        <ol>
          {snacks.map(snackObj => <Snack key={snackObj.id} snack={snackObj} />)}
        </ol>

        <NewSnackForm token={this.props.token} addOneSnack={this.props.addOneSnack}/>

      </div>
    );
  }

}

export default ProfileContainer;
