 import PropTypes from 'prop-types'
 import React from "react";
 import {SectionTitle, SectionWrapper} from './Section.styled.jsx'
 
 const Section = ({ title, children }) => (
    <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionWrapper>
)

Section.propTypes = {
    title: PropTypes.string,
}

export default Section;