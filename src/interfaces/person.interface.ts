import { Attachment } from "./attachment.interface";

export interface Person {
	guid: null | string;
	id: number;
	name: string;
	avatar_url: null | string;
	biography: null | string;
	links: Attachment[];
}
