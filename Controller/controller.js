import userinformation from '../Model/Model.js';
import porter from '../config/mailConfig.js';

export const userinfo = async (req,res) => {
    try {
        const {name, mail, mobile, age, password} = req.body;
        const data = await userinformation.create({
            userName: name,
            userEmail: mail,
            userMobile: mobile,
            userAge: age,
            userPassword: password
        })
        const mailOptions = {
            from:process.env.EMAIL_ID,
            to:mail,
            subject: "This mail is for testing Purpose",
            html:`<h> How you doing!</h>
            <p>Hi ${name} got bored so created an automated mail</p>"`
        }
        await porter.sendMail(mailOptions);
        console.log("mail sent")
        
        res.status(200).json({
            message: "Record inserted successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: "500 error"
        })
    }
}