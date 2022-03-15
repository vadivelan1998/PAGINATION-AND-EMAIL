const path=require("path")
const express=require("express")
const User=require("../models/user.model")
const transporter=require("../configs/mail")

const router=express.Router()


router.get("/",async(req,res)=>{
    try {
      const page=req.query.page||1
      const pagesize=req.query.pagesize||2
      const skip=(page-1)*pagesize
        const user = await User.find().skip(skip).limit(pagesize).lean().exec();
        const totalpages = Math.ceil(
          await User.find().countDocuments() / pagesize
        );
        res.status(200).send({user,totalpages})
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
    
})

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body)
    transporter.sendMail({
      from: "Amazonvadivelan1998@gmail.com",
      to: user.email,
      subject: `welcome to Amazon services Mr.${user.firstName} ${user.lastName}`, // Subject line
      text: `Hello ${user.firstName} please confirm your mail`, // plain text body
      
    })
    // transporter.sendMail({
    //   from: "Amazonvadivelan1998@gmail.com",
    //   to: user.email,
    //   subject: `welcome to Amazon services Mr.${user.firstName} ${user.lastName}`, // Subject line
    //   text: `Hello ${user.firstName} please confirm your mail`, // plain text body
    // });

    var arr = [
      "admin1@.com",
      "admin2@.com",
      "admin3@.com",
      "admin4@.com",
      "admin5@.com"
    ];
    for(var i=0;i<arr.length;i++)
    {
      await transporter.sendMail({
        from: "Amazonvadivelan1998@gmail.com",
        to: arr[i],
        subject: `${user.firstName} ${user.lastName} has registered with us`, // Subject line
        text: ` ${user.firstName}${user.lastName} please welcome`, // plain text body
      });

    }
    res.status(200).send("user registered successfully");


    // res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports=router