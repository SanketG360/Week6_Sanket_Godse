import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../postgresDb/pgConfig";
import { UUID } from "sequelize";
import {User} from '../models/User';
import { Books } from "../models/Book";
interface PaymentAttribute
{
    id:string;
    userId:string;
    bookId:string;
    amount:number;
    status:string;
    createdAt:Date;
    
}
class Payment extends Model<PaymentAttribute> implements PaymentAttribute
{
    public id!:string;
    public userId!:string;
    public bookId!:string;
    public amount!:number;
    public status!:string;
    public createdAt!: Date;
}

Payment.init(
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
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    },
    {
        sequelize,
        tableName:'payment',
        timestamps:false
    }
);

export {Payment};