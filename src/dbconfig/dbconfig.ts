import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Mongo Db connected!!");
        });

        connection.on('error', (error) => {
            console.log('Mongo not connected', error);
            process.exit();
        });

    } catch (error) {
        console.error(error);
    }
}
