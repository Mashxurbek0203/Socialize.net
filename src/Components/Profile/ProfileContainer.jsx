import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import { setProfile } from './../../reducers/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setProfile(2)
  }


  render() {
  
  
    return <Profile {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile
  }
}
export default compose(
  connect(mapStateToProps, {setProfile})
)(ProfileContainer)