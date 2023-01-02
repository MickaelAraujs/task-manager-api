export default class Task {
	constructor(
        readonly id: string | null,
        public title: string, 
        public description: string | null,
        public finished: boolean,
        public finishedAt: Date | null,
        public createdAt: Date,
        public updatedAt: Date,
        public deletedAt: Date | null,
	) {}
}