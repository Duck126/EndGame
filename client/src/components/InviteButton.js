import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



const styles = {
    InviteButton: { backgroundColor: '#BDBDBD', width: "86vw" }
  };
  

  class InviteButton extends Component{
      render() {
    return(

    <Button variant="contained" type="submit" style={styles.InviteButton}/*className={classes.button}*/>
    Invite
    </Button>
)

}
}
export default InviteButton;
