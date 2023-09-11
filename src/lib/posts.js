import IEEEExtreme from '$images/events/IEEEXtreme.png';
import IEEEDay from '$images/events/IEEEDay.png';
import fs from 'fs';

export const posts = [
	{
		slug: 'IEEE-Day-2023',
		title: 'IEEE Day 2023',
		date: '2023-10-03',
		location: 'TBA',
		background: IEEEDay,
		shortDescription: 'Everything you need to know about IEEE Day 2023: Registration, Event Venue, and more!',
		content: fs.readFileSync("src/lib/IEEE-Day-2023.md", "utf-8")
	},

	{
		slug: 'IEEEXtreme-18.0',
		title: 'IEEEXtreme 18.0',
		date: '2023-10-14',
		location: 'TBA',
		background: IEEEExtreme,
		shortDescription: 'Information about registration, prizes, and more!',
		content: fs.readFileSync("src/lib/IEEEXtreme18.md", "utf-8")
	},
];