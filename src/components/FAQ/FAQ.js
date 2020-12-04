import React from 'react';
import { faqData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import ReactHtmlParser from 'react-html-parser';

const Faq = () => (
  <Container>
    <Hero titleText='FQA' image = {faqData.image}/>
    {ReactHtmlParser(faqData.description)}
  </Container>

);

export default Faq;