import { ConferenceRoom } from "./conferenceRoom.interface";
import { Day } from "./day.interface";
import { Track } from "./track.interface";

export interface Conference {
	acronym: string;
	title: string;
	start: string;
	end: string;
	daysCount: number;
	timeslot_duration: string;
	time_zone_name: string;
	url: string;
	tracks: Track[];
	rooms: ConferenceRoom[];
	days: Day[];
}
