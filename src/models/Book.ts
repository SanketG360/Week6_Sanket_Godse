import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../postgresDb/pgConfig";
import { UUID } from "sequelize";
import { Authors } from "../models/Author";
import { Review } from "../models/Review";
import { Ratings } from "../models/Rating";
import { Payment } from "../models/Payment";
import { User } from "../models/User";
interface BookAttribute
{
    id:string;
    bookCode:string;
    title:string;
    description:string;
    publishedYear:string;
    price:string;
    authors:string;
    externalId:string;
    
}
class Books extends Model<BookAttribute> implements BookAttribute
{
    public id!:string;
    public bookCode!: string;
    public title!:string;
    public description!: string;
    public publishedYear!: string;
    public price!:string;
    public authors!:string;
    public externalId!: string;
}

Books.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey:true,
            allowNull:false,
        },
        bookCode:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        publishedYear:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        authors:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        externalId:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        tableName:'books',
        timestamps:false
    }
);

// Association   

Books.hasMany(Authors, { foreignKey: 'bookId' });
Authors.belongsTo(Books,{ foreignKey: 'bookId' });


// Review
Books.hasMany(Review, { foreignKey: 'bookId' });
Review.belongsTo(Books,{foreignKey:'bookId'})

// Rating
Books.hasMany(Ratings, { foreignKey: 'bookId' });
Ratings.belongsTo(Books,{foreignKey:'bookId'})

// Payments
Books.hasMany(Payment, { foreignKey: 'bookId' });
Payment.belongsTo(Books,{foreignKey:'bookId'});

// User --> Review
User.hasMany(Review,{foreignKey:'userId'});
Review.belongsTo(User,{foreignKey:'userId'});

// User -- > Rating
User.hasMany(Ratings,{foreignKey:'userId'});
Ratings.belongsTo(User,{foreignKey:'userId'});

//  Users -- > Payment
User.hasMany(Payment,{foreignKey:'userId'});
Payment.belongsTo(User,{foreignKey:'userId'});

export {Books};