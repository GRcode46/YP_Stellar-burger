import React from "react";
import PropTypes from 'prop-types'


function IngredientsSection(props) {
  return <section className={props.sectionStyle}>{props.children}</section>;
}

IngredientsSection.propTypes = {
  sectionStyle: PropTypes.string,
  children: PropTypes.node.isRequired
}

export {IngredientsSection}
