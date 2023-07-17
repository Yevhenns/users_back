import { Column, Table, Model, DataType } from 'sequelize-typescript'

interface createUser {
    name: string;
    age: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, createUser> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

  @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    age: string;
}