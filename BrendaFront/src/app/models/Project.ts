export class Project {
    id: number;
    name: string;
    description: string;
    deadLine: string;
    constructor(name: string, description: string, deadLine: string, id?: number) {
        this.deadLine = deadLine;
        this.description = description;
        this.name = name;
        if (id) {
            this.id = id;
        }
    }

}
