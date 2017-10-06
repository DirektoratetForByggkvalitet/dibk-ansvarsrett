import styled from 'styled-components';

export const IntroMain = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  padding: 75px 20px 200px;
  line-height: 1.6;
  h1 {
    line-height: 1.2;
    &::before {
      content: "Veiviser";
      display: block;
      color: gray;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 300;
      font-size: 20px;
    }
  }
  figure {
    float: right;
    max-width: 300px;
  }
  ol, p {
    margin-bottom: 40px;
  }
  ol {
    list-style: none;
    margin: 1.8em 0 3em 4em;
    padding: 0;
  }
  ol li {
    counter-increment: step;
    position: relative;
    margin-bottom: 1.6em;
    &::before {
      content: counter(step);
      color: white;
      background: black;
      border-radius: 50%;
      height: 1.8em;
      width: 1.8em;
      margin-left: -2.5em;
      position: absolute;
      vertical-align: middle;
      display: inline-block;
      text-align: center;
      line-height: 1.8;
      font-weight: bold;
    }
  }
  header.temp {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background: #072938;
    color: white;
    font-size: 12px;
  }
  @media screen and (max-width: 700px) {
    figure {
      float: none;
    }
  }
  @media screen and (max-width: 900px) {
    button {
      min-width: 40% !important;
      text-align: center !important;
    }
  }
  @media screen and (max-width: 400px) {
    button {
      width: 100% !important;
    }
  }
`;

export const H2 = styled.h1`background-color: pink;`;
