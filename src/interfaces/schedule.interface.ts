import { Conference } from "./conference.interface";


export interface Schedule {
	version: string;
	base_url: string;
	conference: Conference;
}
