import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../postgresDb/pgConfig";
import { UUID } from "sequelize";
import { User } from "../models/User";
import { Books } from "../models/Book";
interface ReviewAttribute
{
    id:string;
    userId:string;
    bookId:string;
    Content:string;
    
}
class Review extends Model<ReviewAttribute> implements ReviewAttribute
{
    public id!:string;
    public userId!:string;
    public bookId!:string;
    public Content!:string;
}

Review.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey:true,
            allowNull:false,
        },
        userId:{
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:User,
                key:'id'
            }
        },
        bookId:{
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:Books,
                key:'id'
            }
        },
        Content:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        tableName:'review',
        timestamps:false
    }
);

export {Review};