import { API } from "../interfaces/api.interface";

export default class ApiService {
	private static instance: ApiService;

	private static readonly API_URL =
		"https://corsify.de/API.php?apiMode=feed&feedMode=api&dataUrl=https://fahrplan.events.ccc.de/congress/2023/fahrplan/schedule.json";

	private data: API | null = null;

	private constructor() {
		this.syncApi();
	}

	public static getInstance() {
		if (!ApiService.instance) {
			ApiService.instance = new ApiService();
		}
		return ApiService.instance;
	}

	private async fetchApi(): Promise<API> {
		const response = await fetch(ApiService.API_URL);
		const json = await response.json();
		return json;
	}

	private async syncApi(): Promise<void> {
		while (true) {
			this.data = await this.fetchApi();
			await new Promise((resolve) => setTimeout(resolve, 60000));
		}
	}

	public getApi(): API | null {
		return this.data;
	}
}
