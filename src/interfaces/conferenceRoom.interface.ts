import { EventType } from "../enums/eventType.enum";
import { Assembly } from "./assembly.interface";

export interface ConferenceRoom {
	name: string;
	slug: string;
	guid: string;
	type: EventType;
	stream_id: null | string;
	capacity: number;
	description_en: null | string;
	description_de: null | string;
	assembly: Assembly;
}
