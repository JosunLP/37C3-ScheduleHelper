import PersonalScheduleDay from "./PSDay.model";

export default class PersonalSchedule {
	public static readonly ID = crypto.randomUUID();

	public scheduleDayList: PersonalScheduleDay[];

	constructor(scheduleDayList: PersonalScheduleDay[]) {
		this.scheduleDayList = scheduleDayList;
	}
}
