import dotenv from 'dotenv';
dotenv.config();


const credentials = {
    postgres:{
        USERNAME: process.env.USER || " ",
        PASSWORD:  process.env.PASSWORD|| " ",
        HOST:    process.env.HOST || " ",
        PORT:  process.env.DBPORT || " ",
        DATABASE : process.env.DATABASE || " "
    }
}


export default credentials;