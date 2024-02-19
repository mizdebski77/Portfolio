import SchoolIcon from '@mui/icons-material/School';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import pl from '../Images/AboutMeImages/poland.svg';

export const aboutInformations = [
    {
        id: 1,
        title: 'Education',
        icon: SchoolIcon,
        informations: [
            {
                title: 'Silesian University of Technology: Faculty of Automatic Control, Electronics and Computer Science.',
                years: '2019 - 2023',
                description: '',
            },

            {
                title: 'Technical School of Energy and Electronics them. Tadeusz Kościuszko No. 9 in Krakow',
                years: '2015 - 2019',
                description: '',
            },
        ]
    },

    {
        id: 1,
        title: 'Courses',
        icon: ReceiptLongIcon,
        informations: [
            {
                title: 'YouCode / ',
                description: 'Frontend Developer Course',
                years: '10.2022 – 02.2023',
            },
            {
                title: 'ProfiLingua Language School / ',
                description: ' German language School',
                years: '09.2018 – 09.2019',
            },
            {
                title: 'IMPULS Center for Foreign Languages / ',
                description: 'English course',
                years: '03.2012 – 03.2015',
            },
        ]
    },
]

export const Languages = [
    {
        id: 1,
        name: 'Polish',
        level: 'Native',
        icon: pl
    },

    {
        id: 2,
        name: 'English',
        level: 'B2',
        icon: pl
    },

    {
        id: 3,
        name: 'German',
        level: 'A2',
        icon: pl
    }
]