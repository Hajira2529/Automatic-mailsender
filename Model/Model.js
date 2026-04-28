import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const mailSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userMobile: {
        type: Number,
        required: true,
        unique: true
    },
    userAge: {
        type: Number,
        required: true,
        default: 28
    },
    userPassword: {
        type: String,
        require: true,
    }
},{
    timestamps: true
})

mailSchema.pre("save", async function () {
    if(this.isModified(this.userPassword)){
        return;
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.userPassword = await bcrypt.hash(this.userPassword,salt);
        return
    } catch (error) {
        throw error
    }
})
 
mailSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password,this.userPassword);
}

const userinformation = mongoose.model("userdata",mailSchema);
export default userinformation