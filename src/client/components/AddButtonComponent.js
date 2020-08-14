import React from 'react';

import Icon from '@material-ui/core/Icon';

const styles = {
  line: {
    display: 'absolute',
    borderRight: '5px solid #568cf0',
    position: 'absolute',
    height: '8vh',
    zIndex: '-1'
  },
  icon: { fontSize: 40, backgroundColor: '#568cf0', borderRadius: '10%' }
};

export default function AddButtonComponent(props) {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      }}
      onClick={props.onClick}
    >
      <div style={{ ...styles.line, left: '49.7%' }} />
      <div
        style={{
          display: 'flex',
          height: '8vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Icon style={styles.icon}>add_box</Icon>
      </div>
    </div>
  );
}
