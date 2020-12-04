import React from 'react';
import Container from '../Container/Container';
import {infoData} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image = {infoData.image}/>
    {ReactHtmlParser(infoData.description)}
  </Container>
);

Info.propTypes = {
  imageInfo: PropTypes.string,
};

export default Info;
