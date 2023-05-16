import {
	HomeOutlined,
	AutoGraphOutlined,
	MenuBookOutlined,
	SettingsOutlined,
	GroupsOutlined,
	GroupAddOutlined,
	DomainOutlined,
	SupervisorAccountOutlined
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
		name: 'Doctor',
		icon: <SupervisorAccountOutlined />,
		path: '/doctor',
		id: 3
	},
	{
		name: 'Bemor',
		icon: <GroupAddOutlined />,
		path: '/bemor',
		id: 4
	},
	{
		name: 'Bo`lim',
		icon: <DomainOutlined />,
		path: '/bulim',
		id: 5
	},
	{
		name: 'Sozlash',
		icon: <SettingsOutlined />,
		path: '/settings',
		id: 6
	},
]