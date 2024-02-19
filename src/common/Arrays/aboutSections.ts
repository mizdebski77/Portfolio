import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import TranslateIcon from '@mui/icons-material/Translate';
import eng from '../Images/Flags/english.svg';
import pl from '../Images/Flags/poland.svg';
import ger from '../Images/Flags/german.svg';

export const aboutInformations = [
    {
        icon: HistoryEduIcon,
        id: 1,
        title: 'Education',
        university: [
            {
                place: 'Technical School of Energy and Electronics them. Tadeusz Kościuszko No. 9 in Krakow',
                years: '2015 - 2019'
            },

            {
                place: 'Silesian University of Technology: Faculty of Automatic Control, Electronics and Computer Science.',
                years: '2019 - 2023'
            }
        ]

    },

    {
        icon: TranslateIcon,
        id: 1,
        title: 'Languages',
        languages: [
            {
                language: 'Polish',
                level: 'Native',
                icon: pl
            },
            {
                language: 'English',
                level: 'B2',
                icon: eng
            },
            {
                language: 'German',
                level: 'A2',
                icon: ger
            },
        ]
    },

    {
        icon: SchoolIcon,
        id: 1,
        title: 'Courses',
        courses: [
            {
                title: 'YouCode',
                descritpion: 'Frontend Developer Course',
                years: '10.2022 – 02.2023'
            },

            {
                title: 'ProfiLingua Language School /',
                descritpion: ' German language School',
                years: '09.2018 – 09.2019'
            },

            {
                title: 'IMPULS Center for Foreign Languages',
                descritpion: 'English course',
                years: '03.2012 – 03.2015'
            },
        ]
    },
]