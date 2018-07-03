import React from 'react';
// import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

/*const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};*/

export default props =>
<div>
      <Avatar
        alt={props.alt}
        src={props.src}
        className=/*{classNames(classes.avatar, classes.bigAvatar)}*/ 'valueO'
      />
</div>