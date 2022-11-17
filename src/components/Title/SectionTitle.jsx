import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Block, CallToAction} from 'components/Title/SectionTitle.styled';
import { Box } from '../Box';


class Section extends Component {
    static propTypes = {
        title: PropTypes.any.isRequired
    };

    state = {
        title: this.props.title,
    }

    renderChildren() {
        return this.props.children
      }

    render () {

        return (
            
            <Box>
              <Block>
                 <CallToAction>Please laeve feedback</CallToAction>
                 <Block>{this.renderChildren()}</Block>
              </Block>
            </Box>

        );
    };
};

export default Section;