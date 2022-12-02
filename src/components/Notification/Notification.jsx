import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NotificBox, NotificText} from './Notification.styled'

class Notification extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
    }

    render () {

        return (
          <NotificBox>
            <NotificText>{this.props.message}</NotificText>
          </NotificBox>
        )
    };
};

export default Notification;