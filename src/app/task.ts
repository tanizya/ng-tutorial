export class Task {
    id:number;
    todo:string;
    priority:string;
    memo:string;
    constructor(id:number, todo:string, priority:string, memo:string) {
        this.id = id;
        this.todo = todo;
        this.priority = priority;
        this.memo = memo;
    }
}
