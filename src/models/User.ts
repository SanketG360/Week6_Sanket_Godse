import { DataTypes, Model, UUIDV4} from "sequelize";
import sequelize from "../postgresDb/pgConfig";
interface UserAttribute
{
    id:string;
    username:string;
    password:string;
    email:string;
    role: 'User' | 'Author' | 'Admin';
    
}
class User extends Model<UserAttribute> implements UserAttribute
{
    public id!:string;
    public username!:string;
    public password!:string;
    public email!:string;
    public role!:'User' | 'Author' | 'Admin';
}

User.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        role: {
            type: DataTypes.ENUM('User', 'Author', 'Admin'),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName:'users',
        timestamps:false
    }
);

export {User};