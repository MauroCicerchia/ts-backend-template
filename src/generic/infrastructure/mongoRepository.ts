import _ from "lodash";
import Promise from "bluebird";
import EntityNotFound from "../domain/exceptions/entityNotFound";

class BaseRepository<T extends { id: TId }, TId> {
    private entities: T[];

    constructor() {
        this.entities = [];
    }

    getAll(): Promise<T[]> {
        return Promise.resolve(this.entities);
    }

    getById(id: TId): Promise<T> {
        const e = this.entities.find((e: T) => e.id === id);

        if (!e) {
            throw new EntityNotFound("Entity not found");
        }

        return Promise.resolve(e);
    }

    create(entity: T): Promise<T> {
        this.entities.push(entity);

        return Promise.resolve(entity);
    }

    update(entity: T): Promise<T> {
        const e = _.find(this.entities, (e: T) => e.id === entity.id);

        if (!e) {
            throw new EntityNotFound("Entity not found");
        }

        _.assign(e, entity);

        return Promise.resolve(e);
    }

    delete(id: TId): Promise<void> {
        _.remove(this.entities, (e: T) => e.id === id);

        return Promise.resolve();
    }
}

export default BaseRepository;
