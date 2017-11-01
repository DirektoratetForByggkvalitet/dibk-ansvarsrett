import React from 'react';
import PropTypes from 'prop-types';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

export default function Intro({ close }) {
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Finn ut om du kan erklære ansvar!</Primitives.Heading.H1>
        <Primitives.Paragraphs.P>
          Dette er en veiviser for deg som vil finne ut om firmaet ditt er kvalifisert til å erklære
          ansvar i et byggeprosjekt. Det vil si at firmaet ditt kan ta ansvar for de delene av
          arbeidet som dere vil gjøre, og at dere står ansvarlig for at arbeidet utføres riktig. Vi
          hjelper deg også å lage en erklæring for ansvarsrett som du kan skrive ut, signere og
          sende til ansvarlig søker.
        </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P>
          Du får kun velge ett ansvarsområde med én tiltalsklasse og én funksjon for hver gang du
          gjennomfører denne veiviseren.
        </Primitives.Paragraphs.P>
        <section>
          <div>
            <Primitives.Heading.H2 small>Før du begynner må du vite:</Primitives.Heading.H2>
            <ol>
              <li>Organisasjonsnummeret til firmaet ditt</li>
              <li>Utdanningen og erfaringen til faglig ledelse i firmaet ditt</li>
              <li>Hva firmaet ditt skal ta ansvar for</li>
              <li>Hvilket firma som er ansvarlig søker </li>
            </ol>
          </div>
          <div>
            <Primitives.Figure>
              <img src="/images/intro.svg" alt="" />
            </Primitives.Figure>
          </div>
        </section>
        <Primitives.Heading.H2 small>Usikker?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>Snakk med ansvarlig søker eller oppdragsgiver.</Primitives.Paragraphs.P>
        <Primitives.Heading.H2 small>Når veiviseren er fullført</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Når du har fullført veiviseren får du vite om du kan erklære ansvar eller ikke. Du kan skrive ut og signere erklæringen, slik at du kan sende den til ansvarlig søker.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};
