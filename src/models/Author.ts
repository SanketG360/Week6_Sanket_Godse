import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../postgresDb/pgConfig";
import { UUID } from "sequelize";
import { Books } from "../models/Book";
interface AuthorAttribute
{
    id:string;
    name:string;
    bio:string;
    birthDate:string;
    IsSystemUser:boolean;
    bookId: string;
    
}
class Authors extends Model<AuthorAttribute> implements AuthorAttribute
{
    public id!:string;
    public name!:string;
    public bio!:string;
    public  birthDate!:string;
    public IsSystemUser!:boolean;
    public bookId!: string;
}

Authors.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey:true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        bio:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        birthDate:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        IsSystemUser:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        bookId: {
            type: DataTypes.UUID,
            references: {
              model: Books,
              key: "id",
            },
            allowNull: false,
          },
    },
    {
        sequelize,
        tableName:'authors',
        timestamps:false
    }
);

export {Authors};