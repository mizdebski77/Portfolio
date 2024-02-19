import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import TranslateIcon from '@mui/icons-material/Translate';
import eng from '../Images/Flags/english.svg';
import pl from '../Images/Flags/poland.svg';
import ger from '../Images/Flags/german.svg';

export const aboutInformations = [
    {
        id: 1,
        title: 'Education',
        informations: [
            {
                title: 'Technical School of Energy and Electronics them. Tadeusz Kościuszko No. 9 in Krakow',
                years: '2015 - 2019',
                description: '',
                icon: HistoryEduIcon,
            },

            {
                title: 'Silesian University of Technology: Faculty of Automatic Control, Electronics and Computer Science.',
                years: '2019 - 2023',
                description: '',
                icon: HistoryEduIcon,
            }
        ]

    },

    {
        id: 1,
        title: 'Languages',
        informations: [
            {
                title: 'Polish',
                description: 'Native',
                icon: pl,
                years: ''
            },
            {
                title: 'English',
                description: 'B2',
                icon: eng,
                years: ''
            },
            {
                title: 'German',
                description: 'A2',
                icon: ger,
                years: ''
            },
        ]
    },

    {
        id: 1,
        title: 'Courses',
        informations: [
            {
                title: 'YouCode',
                description: 'Frontend Developer Course',
                years: '10.2022 – 02.2023',
                icon: SchoolIcon,
            },

            {
                title: 'ProfiLingua Language School /',
                description: ' German language School',
                years: '09.2018 – 09.2019',
                icon: SchoolIcon,
            },

            {
                title: 'IMPULS Center for Foreign Languages',
                description: 'English course',
                years: '03.2012 – 03.2015',
                icon: SchoolIcon,
            },
        ]
    },
]