import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../postgresDb/pgConfig";
import { UUID } from "sequelize";
import { User } from "../models/User";
import { Books } from "../models/Book";
interface RatingAttribute
{
    id:string;
    userId:string;
    bookId:string;
    rating:string;
    
}
class Ratings extends Model<RatingAttribute> implements RatingAttribute
{
    public id!:string;
    public userId!:string;
    public bookId!:string;
    public rating!:string;
}

Ratings.init(
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
        rating:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        tableName:'rating',
        timestamps:false
    }
);

export {Ratings};