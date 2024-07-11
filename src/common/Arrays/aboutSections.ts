import SchoolIcon from '@mui/icons-material/School';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import pl from '../Images/AboutMeImages/poland.svg';
import gb from '../Images/AboutMeImages/english.svg';
import ger from '../Images/AboutMeImages/german.svg';

export const aboutInformations = [
    {
        id: 1,
        title: 'Education',
        icon: SchoolIcon,
        informations: [
            {
                title: 'Silesian University of Technology Faculty of Automatic Control, Electronics and Computer Science / ',
                years: '10.2019 - 02.2023',
                description: 'Engineer',
            },

            {
                title: 'Technical School of Energy and Electronics them. Tadeusz Kościuszko No. 9 in Krakow',
                years: '09.2015 - 06.2019',
                description: '',
            },
        ]
    },

    {
        id: 2,
        title: 'Courses',
        icon: ReceiptLongIcon,
        informations: [
            {
                title: 'YouCode / ',
                description: 'Frontend Developer Course',
                years: '02.2022 – 05.2022',
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
        icon: gb
    },

    {
        id: 3,
        name: 'German',
        level: 'B1',
        icon: ger
    }
]