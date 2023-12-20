export default class PersonalScheduleTalk {

	public static readonly ID = crypto.randomUUID();

	public locationId: string;

	public talkId: string;

	constructor(locationId: string, talkId: string) {
		this.locationId = locationId;
		this.talkId = talkId;
	}
}
