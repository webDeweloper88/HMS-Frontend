import {
	HomeOutlined,
	AutoGraphOutlined,
	MenuBookOutlined,
	SettingsOutlined,
} from '@mui/icons-material';

export const navMenu = [
	{
		name: 'Asosiy',
		icon: <HomeOutlined />,
		path: '/',
		id: 1
	},
	{
		name: 'Watchlist',
		icon: <AutoGraphOutlined />,
		path: '/watchlist',
		id: 2
	},
	{
		name: 'Yangiliklar',
		icon: <MenuBookOutlined />,
		path: '/news',
		id: 3
	},
	{
		name: 'Sozlash',
		icon: <SettingsOutlined />,
		path: '/setings',
		id: 4
	},
]