export type CrewStatus = 'ACTIVE' | 'DECEASED' | 'DAMAGED';
export type CrewTag = 'ANDROID' | 'REFUGEE' | 'HUMAN';

export interface CrewMember {
	id: string;
	name: string;
	role: string;
	status: CrewStatus;
	tags?: CrewTag[];
}

export const crew: CrewMember[] = [
	{
		id: '001',
		name: 'Sim Troob',
		role: 'Ship Captain',
		status: 'ACTIVE',
		tags: ['HUMAN'],
	},
	{
		id: '002',
		name: 'Bear',
		role: 'Maintenance Technician',
		status: 'DECEASED',
	},
	{
		id: '003',
		name: 'Cheeto',
		role: 'Security',
		status: 'ACTIVE',
	},
	{
		id: '004',
		name: 'Quincy',
		role: 'Network Administrator',
		status: 'ACTIVE',
		tags: ['ANDROID'],
	},
	{
		id: '005',
		name: 'PFC Hudson',
		role: 'Security',
		status: 'DECEASED',
		tags: ['REFUGEE'],
	},
	{
		id: '006',
		name: 'Glen Castor',
		role: 'Security',
		status: 'ACTIVE',
		tags: ['REFUGEE'],
	},
	{
		id: '007',
		name: 'Pander',
		role: 'Data Analyst',
		status: 'ACTIVE',
		tags: ['ANDROID'],
	},
	{
		id: '008',
		name: 'Kranot',
		role: '',
		status: 'DAMAGED',
		tags: ['ANDROID'],
	},
];
