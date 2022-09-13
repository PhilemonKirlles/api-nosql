const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Thought",
          },],
        friends: [this]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
       
        }
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;