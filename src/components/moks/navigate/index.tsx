import {
	HomeOutlined,
	AutoGraphOutlined,
	ScatterPlotOutlined,
	SettingsOutlined,
	ScienceOutlined,
	GroupAddOutlined,
	DomainOutlined,
	SupervisorAccountOutlined,
	NewspaperOutlined,
	ThermostatAutoOutlined,
	BloodtypeOutlined,
	FormatIndentIncreaseOutlined,
} from '@mui/icons-material';

export const navMenu = [
	{
		name: 'Asosiy',
		icon: <HomeOutlined />,
		path: '/',
		id: 1
	},
	{
		name: 'Indeks',
		icon: <FormatIndentIncreaseOutlined />,
		path: '/indeks',
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
		name: 'Labaratory',
		icon: <ScienceOutlined />,
		path: '/labaratory',
		id: 6
	},
	{
		name: 'Glyukoza',
		icon: <ScatterPlotOutlined />,
		path: '/glyukoza',
		id: 7
	},
	{
		name: 'Bioximik',
		icon: <ThermostatAutoOutlined />,
		path: '/bioximik',
		id: 8
	},
	{
		name: 'Analiz',
		icon: <NewspaperOutlined />,
		path: '/analiz',
		id: 9
	},
	{
		name: 'Qon',
		icon: <BloodtypeOutlined />,
		path: '/qon',
		id: 10
	},
	{
		name: 'Sozlash',
		icon: <SettingsOutlined />,
		path: '/settings',
		id: 11
	},
]