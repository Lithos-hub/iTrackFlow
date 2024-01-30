import mongoose from 'mongoose';

export default defineEventHandler(() => mongoose.connection.readyState);
