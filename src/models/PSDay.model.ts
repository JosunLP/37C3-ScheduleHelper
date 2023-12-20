import { Day } from "../interfaces/day.interface";
import PersonalScheduleTalk from "./PSTalk.model";

export default class PersonalScheduleDay {

	public static readonly ID = crypto.randomUUID();

	public day: Day;

	public talks: PersonalScheduleTalk[];

	constructor(day: Day, talks: PersonalScheduleTalk[]) {
		this.day = day;
		this.talks = talks;
	}
}
