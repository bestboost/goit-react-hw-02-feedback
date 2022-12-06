import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Block, CallToAction} from 'components/Title/SectionTitle.styled';
import { Box } from '../Box';


class Section extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.array.isRequired
    };

    state = {
        title: this.props.title,
    }

   
    render () {

        return (
            
            <Box>
              <Block>
                 <CallToAction>{this.props.title}</CallToAction>
                 <Block>{this.props.children}</Block>
              </Block>
            </Box>

        );
    };
};

export default Section;