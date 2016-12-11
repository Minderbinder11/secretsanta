import { ListGroup, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import GroupItem from './GroupItem.jsx';

class GroupBox extends React.Component { //ES6 class
  constructor (props) {
    super (props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.addGroup = this.addGroup.bind(this);
  }
  handleClick () {
    console.log('why you clicking the box?');
  }

  addGroup () {
    console.log('add group function');
  }


  render () { //needs a button and subcomponent GroupItem
    return ( //wrap this whole thing in a table

      <div id="GroupBox">

        <ButtonToolbar>
          <Button block bsStyle="primary" bsSize="small" onClick={this.addGroup}>Add Group</Button>
        </ButtonToolbar>

        <ListGroup>
          {this.props.groups.map((group, index) =>
            <GroupItem className="GroupItem" group={group} key={index} />
            )
          }
        </ListGroup>
      </div>
      );
  }
}
export default GroupBox;