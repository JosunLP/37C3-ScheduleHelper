import { DayRoom } from "./dayRoom.interface";

export interface Day {
	index: number;
	date: string;
	day_start: string;
	day_end: string;
	rooms: { [key: string]: DayRoom[] };
}
