import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  if (Object.keys(data).length !== 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Finn ut om du kan erklære ansvar!</Primitives.Heading.H1>
        <Primitives.Paragraphs.P>
          Denne veiviseren hjelper deg å finne ut om firmaet ditt kan erklære ansvar i et byggeprosjekt. Dette krever at den faglige ledelsen som skal delta i prosjektet, må ha lang nok relevant utdanning og lang nok relevant arbeidserfaring. Er firmaet ditt kvalifisert, får du hjelp til å lage en erklæring for ansvarsrett som du kan skrive ut, signere og sende til ansvarlig søker. Mangler firmaet kompetanse, får du hjelp til å finne ut om du kan søke kommunen om ansvarsrett. 
        </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P>
        Du må selv vurdere om utdanningen og erfaringen til den faglige ledelsen er relevant. Du kan velge ett ansvarsområde med én tiltaksklasse og én funksjon for hver gang du tar veiviseren. 
        </Primitives.Paragraphs.P>
        <section>
          <div>
            <Primitives.Heading.H2 small>Før du begynner må du vite:</Primitives.Heading.H2>
            <ol>
              <li>Organisasjonsnummeret til firmaet ditt</li>
              <li>Hva firmaet ditt skal ta ansvar for</li>
              <li>Hvor lang relevant utdanning og relevant erfaring faglig ledelse i firmaet ditt har</li>
              <li>Hvilket firma som er ansvarlig søker </li>
            </ol>
          </div>
          <div>
            <Primitives.Figure>
              <img src="/images/intro.svg" alt="" />
            </Primitives.Figure>
          </div>
        </section>
        <Primitives.Heading.H2 small>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Trenger du å gjøre avklaringer med for eksempel oppdragsgiver eller ansvarlig søker underveis? Nettleseren husker hvor du stopper, så du kan ta en pause og fortsette senere.
          
        </Primitives.Paragraphs.P>
               <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
