import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



const styles = {
    InviteButton: { backgroundColor: '#FFEA00', width: 560 }
  };
  

  class InviteButton extends Component{
      render() {
    return(

    <Button variant="contained" style={styles.InviteButton}/*className={classes.button}*/>
    Invite
    </Button>
)

}
}
export default InviteButton;
