import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import PersonalScheduleTalk from "../models/PSTalk.model";
import ApiService from "../services/api.srvs";

@customElement("event-component")
export class Event extends LitElement {

	//@ts-ignore
	@property()
	talkId?: string;

	private talk?: PersonalScheduleTalk;

	constructor() {
		super();
		this.getTalk();
	}

	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			color: blue;
		}
	`;

	// Render the UI of your component
	render() {
		return html`
			<div>
				${this.talk?.talkId}
			</div>
		`;
	}

	private getTalk() {
		const data = ApiService.getInstance().getApi();

		const rooms = data?.schedule.conference.rooms;

		data?.schedule.conference.days.forEach((day) => {
			rooms?.forEach((room) => {
				day.rooms[room.name.replaceAll(" ", "")].forEach((event) => {
					if (event.guid === this.talkId) {
						this.talk = new PersonalScheduleTalk(
							room.guid,
							event.guid
						);
					}
				});
			});
		});
	}
}
