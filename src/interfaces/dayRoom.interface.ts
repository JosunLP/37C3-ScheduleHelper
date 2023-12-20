import { Duration } from "../enums/duration.enum";
import { Language } from "../enums/language.enum";
import { Name } from "../enums/name.enum";
import { PurpleType } from "../enums/purpleType.enum";
import { RecordingLicense } from "../enums/recordingLicense.enum";
import { Attachment } from "./attachment.interface";
import { Person } from "./person.interface";

export interface DayRoom {
	guid: string;
	id: number;
	date: string;
	start: string;
	duration: Duration;
	room: string;
	slug: string;
	url: string;
	title: string;
	subtitle: null | string;
	language: Language | null;
	track: Name | null;
	type: PurpleType;
	abstract: string;
	description: string;
	persons: Person[];
	links: Attachment[];
	logo: null | string;
	feedback_url?: string;
	recording_license?: RecordingLicense;
	attachments?: Attachment[];
	do_not_record?: boolean;
}
