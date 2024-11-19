interface Where {
  title: string;
  subtitle: string;
}

interface Experience {
  where: Where;
  when: string;
  path?: string;
}

interface TypeExperience {
  type: string;
  dataExperiences: Experience[];
}

export const experiences: TypeExperience[] = [
  {
    type: 'education',
    dataExperiences: [
      {
        where: { title: 'Università La Sapienza', subtitle: 'Roma' },
        when: '2015-2019',
        path: 'https://www.uniroma1.it/',
      },
      {
        where: { title: 'Politecnico di Milano', subtitle: 'Milano' },
        when: '2019-2022',
        path: 'https://www.polimi.it/',
      },
      {
        where: { title: 'Università Bocconi', subtitle: 'Milano' },
        when: '2022-2025 (in corso)',
        path: 'https://www.unibocconi.eu/',
      },
    ],
  },
  {
    type: 'work',
    dataExperiences: [
      {
        where: { title: 'Software Developer', subtitle: 'Facebook' },
        when: '2022-present',
        path: 'https://www.facebook.com/',
      },
      {
        where: { title: 'Frontend Developer', subtitle: 'Nvidia' },
        when: '2020-2022',
        path: 'https://www.nvidia.com/',
      },
      {
        where: { title: 'Junior Developer', subtitle: 'Google' },
        when: '2018-2020',
        path: 'https://www.google.com/',
      },
    ],
  },
];
