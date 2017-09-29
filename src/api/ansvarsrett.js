export default {
  meta: {
    title: 'Erklæring om ansvarsrett',
    footer: 'Your footer here!',
  },
  schema: [
    {
      id: 'page1',
      type: 'Page',
      title: 'Informasjon om firmaet ditt',
      lead:
        '<p>Dersom firmaet ditt har norsk organisasjonsnummer vil informasjon om firmaet ditt hentes fra Brønnøysundregistrene.</p><p>Representerer du et utenlandsk firma, må du fylle inn informasjonen manuelt.</p>',
      children: [
        {
          property: 'companytype',
          type: 'Radio',
          heading: 'Hvem representerer du?',
          suggestedAnswer: [
            {
              type: 'Answer',
              text: 'Et norsk firma',
              value: 'norwegian',
            },
            {
              type: 'Answer',
              text: 'Et utenlands firma',
              value: 'foreign',
            },
          ],
        },
        {
          property: 'orgnr',
          type: 'FetchOrg',
          heading: 'Organisasjonsnummer',
          text: 'Eksempel: 123 456 789',
          placeholder: '987 654 321',
          source:
            'https://data.brreg.no/enhetsregisteret/enhet.json?page=0&size=30&$filter=organisasjonsnummer+eq+',
          information:
            'Er firmaets navn eller adresse feil? Da må du endre denne informasjonen via skjemaet <a href="https://www.altinn.no/no/Starte-og-drive-bedrift/Drive/Andre-driftsoppgaver/Flytting-og-omorganisering/Hvordan-meldes-flytting-og-andre-endringer/">Samordnet registermelding</a> i Altinn før du fortsetter.',
        },
        {
          type: 'Group',
          heading: 'Kontaktperson for prosjektet',
          property: 'contactperson',
          children: [
            {
              property: 'contactperson.name',
              type: 'Input',
              heading: 'Navn',
            },
            {
              property: 'contactperson.email',
              type: 'Input',
              validator: { pattern: '\\S+@\\S+\\.\\S+', error: 'Må være en epost' },
              heading: 'Epost',
            },
            {
              property: 'contactperson.phone',
              type: 'Input',
              heading: 'Telefon',
            },
          ],
        },
        {
          property: 'sgregistered',
          type: 'FetchSG',
          heading: '${name} er registrert med sentral godkjenning for følgende områder',
          disabled: {
            field: 'orgnr.orgid',
            operator: 'required',
          },
          text:
            'Godkjenningen er til ${status.approval_period_to} og viser hvilke fagområder firmaet har kompetanse på. Du kan likevel erklære ansvar for ansvarsområder som ligger utenfor den sentrale godkjenningen hvis firmaet ditt har nødvendig kunnskap og erfaring fra også det området.',
          invalidapproval: 'Vi fant ikke godkjenningen din i systemet vårt',
          source: 'https://sgregister.dibk.no/api/enterprises/',
        },
      ],
    },
    {
      id: 'page2',
      type: 'Page',
      title: 'Har firmaet rett kompetanse til å gjøre jobben?',
      lead:
        '<p>For å kunne erklære ansvarsrett for en jobb, må firmaet ditt ha tilstrekkelig formell kompetanse for jobben som skal gjøres. Dette er en kombinasjon av utdannelse og arbeidserfaring.</p><p>Eks: Hvis firmaet skal ha ansvar for tømrerarbeider for en enebolig, må fagansvarlig for jobben minst være tømrersvenn i tllegg til å ha minst 2 års relevant arbeidserfaring.</p>',
      children: [
        {
          type: 'Group',
          heading:
            'Hvilken utdanning og praksis, som er nyttig for jobben som nå skal gjøres, har faglig leder i firma?',
          property: 'competence',
          children: [
            {
              property: 'competence.education',
              type: 'Select',
              heading: 'Utdanningsnivå',
              defaultOption: 'Velg utdanningsnivå',
              text:
                '<a href="https://dibk.no/byggeregler/sak/3/11/11-2/ ">Les mer om utdanningsnivåer</a> i byggesaksforskriften',
              suggestedAnswer: [
                {
                  type: 'Answer',
                  text: 'Fag- eller svenneprøve',
                  value: 'a',
                },
                {
                  type: 'Answer',
                  text: 'Mesterbrev eller fagskole',
                  value: 'b',
                },
                {
                  type: 'Answer',
                  text: 'Utdanning på høgskolenivå',
                  value: 'c',
                },
                {
                  type: 'Answer',
                  text: 'Utdanning på universitetsnivå',
                  value: 'd',
                },
              ],
            },
            {
              property: 'competence.experience',
              type: 'Input',
              text:
                '<a href="https://dibk.no/byggeregler/sak/3/11/11-4/ ">Les mer om krav til praksis</a> i byggesaksforskriften',
              heading: 'År med relevant erfaring',
            },
            {
              property: 'contactperson.phone',
              type: 'Image',
              heading: 'Hvilken jobb kan du gjøre?',
              text: 'Utdannings- og erfaringsnivået avgjør hvilken jobb firmaet ditt kan gjøre',
              image: {
                url: '/images/matrix.png',
                alt: 'alt for image',
              },
            },
          ],
        },
        {
          property: 'tiltaksklasse',
          type: 'Radio',
          heading: 'Hvilken tiltaksklasse er jobben?',
          text:
            '<a href="https://dibk.no/byggeregler/sak/3/9/9-4/">Les mer om tiltaksklasser</a> i byggesaksforskriften',
          suggestedAnswer: [
            {
              type: 'Answer',
              heading: 'Tiltaksklasse 1',
              text:
                'Som regel vil alt arbeid med oppføring av eneboliger, tomannsboliger og rekkehus komme inn under tiltaksklasse 1. Deler av utførelsen av større boligbygninger innitil 3 etasjer kan også være tiltaksklasse 1. Likevel kan det hende at noe av arbeidet er spesielt vanskelig og må settes til tiltaksklasse 2 eller 3.',
              image: {
                url: '/images/skog.jpg',
                alt: '',
              },
              value: 'tiltaksklasse1',
            },
            {
              type: 'Answer',
              heading: 'Tiltaksklasse 2',
              text:
                'Typiske bygninger i tiltaksklasse 2 er boligblokker og kontorbygg på 3-4 etasjer. Deler av utførelsen av større bygninger inntil 5 etasjer kan også være tiltaksklasse 2. Likevel kan det hende at noe av arbeidet er spesielt vanskelig og må settes til tiltaksklasse 3.',
              image: {
                url: '/images/bygg.jpg',
                alt: '',
              },
              value: 'tiltaksklasse2',
            },
            {
              type: 'Answer',
              heading: 'Tiltaksklasse 3',
              text:
                'Arbeid med store og kompliserte bygninger er i tiltaksklasse 3. Det kan også være enkelte ansvarsområder i mindre bygninger som må settes i tiltaksklasse 3 fordi det er spesielt vanskelig.',
              image: {
                url: '/images/sykehus.jpg',
                alt: '',
              },
              value: 'tiltaksklasse3',
            },
          ],
        },
        {
          property: 'function',
          type: 'Radio',
          heading: 'Hvilken funksjon har firmaet ditt i prosjektet??',
          text:
            '<a href="https://dibk.no/byggeregler/sak/3/12/innledning/">Les mer om hvilket ansvar du har</a> som ansvarlig søker, prosjekterende, utførende og kontrollerende i byggesaksforskriften',
          suggestedAnswer: [
            {
              type: 'Answer',
              heading: 'Ansvarlig søker (SØK)',
              value: 'sok',
            },
            {
              type: 'Answer',
              heading: 'Ansvarlig prosjekterende (PRO)',
              value: 'pro',
            },
            {
              type: 'Answer',
              heading: 'Ansvarlig utførende (UTF)',
              value: 'utf',
            },
            {
              type: 'Answer',
              heading: 'Ansvarlig kontrollerende (KPR)',
              value: 'krp',
            },
          ],
        },
      ],
    },
    {
      id: 'responsibility',
      type: 'Page',
      title: 'Hva skal firmaet ta ansvar for?',
      lead:
        'Pass på at du ikke beskriver arbeidet som mer omfattende enn det du faktsk skal gjøre. Det er viktig å avgrense det mot andre ansvarsområder slik at du ikke blir stilt til ansvar for noe noen andre har gjort. ',
      children: [
        {
          property: 'responsibility.description',
          type: 'Textarea',
          heading: 'Beskriv kort arbeidet som firmaet ditt tar ansvar for',
          information: 'Husk at det du beskriver her vil firmaet bli stilt til ansvar for',
        },
      ],
    },
    {
      id: 'hooray',
      type: 'Result',
      title: 'Hurra - du kan ha katt 🌈',
      lead:
        'Les nøye gjennom svarene dine, og sjekk at alt stemmer før du tar med deg resultatene til ditt nærmeste adopsjonssenter for katter. Husk at du vil bli stilt til ansvar for at katten får det bra hos deg!',
      exporter: 'dataExport',
    },
  ],
};
