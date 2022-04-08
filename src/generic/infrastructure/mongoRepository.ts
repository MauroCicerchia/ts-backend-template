import Promise from "bluebird";
import { Model } from "mongoose";
import EntityNotFound from "../domain/exceptions/entityNotFound";

class BaseRepository<T extends { id: TId }, TId> {
    constructor(private model: Model<T>) {}

    getAll(): Promise<T[]> {
        return Promise.resolve(this.model.find({}));
    }

    getById(id: TId): Promise<T | null> {
        return Promise.resolve(this.model.findById(id))
            .tap((entity) => {
                if (!entity) {
                    throw new EntityNotFound(`Entity with id ${id} not found`);
                }
            })
            .catch(() => {
                throw new EntityNotFound(`Entity with id ${id} not found`);
            });
    }

    create(entity: T): Promise<T> {
        return Promise.resolve(this.model.create(this.buildForCreate(entity)));
    }

    update(id: TId, entity: T): Promise<T | null> {
        console.log("Hola", id, entity);

        return Promise.resolve(this.model.findByIdAndUpdate(id, this.buildForUpdate(entity))).tap((updatedEntity) => {
            if (!updatedEntity) {
                throw new EntityNotFound(`Entity with id ${id} not found`);
            }
        });
    }

    delete(id: TId): Promise<unknown> {
        return Promise.resolve(this.model.findByIdAndRemove(id));
    }

    protected buildForCreate(entity: T): T {
        return entity;
    }

    protected buildForUpdate(entity: T): T {
        return entity;
    }
}

export default BaseRepository;
