import React, { Component } from "react";
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import './DashboardTabs.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';import moment from 'moment';
import classnames from 'classnames';
import ProfileEvents from "../ProfileEvents";
import AllEvents from "../AllEvents";
import { getUserEvents, deleteEvent, getAllEvents } from '../../actions/eventActions';

class DashboardTabs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  componentWillMount = () => {
    this.props.getUserEvents(this.props.user._id)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="dashTabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Your Event Posts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Upcoming Events
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="tabTitle">
                {/*<h4>Your Event Posts</h4>*/}
                </div>
                {!this.props.userEvents ? (
                  <h2>You haven't created any events</h2>
                ) : (
                  !this.props.userEvents.length > 1 ? (
                    <ProfileEvents key={this.props.userEvents[0]._id} event={this.props.userEvents[0]} />
                  ) : (
                    this.props.userEvents.map(event => (
                      <ProfileEvents key={event._id} event={event}/>
                      ))
                  )
                )
                }
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="tabTitle">
                {/*<h3>Upcoming Events</h3>*/}
                </div>
                <AllEvents />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserEvents(userId) {
    dispatch(getUserEvents(userId))
  }
})

const mapStateToProps = state => ({
  user: state.authUser.user,
  userEvents: state.events.userEvents,
  events: state.events.events
})

export default connect(mapStateToProps, { getUserEvents, getAllEvents })(DashboardTabs)