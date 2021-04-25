// const nodemailer = require('nodemaier'),
//     { EMAIL, PASSWORD } = process.env;

// module.exports = {
//     email: async(req, res) => {
//         const { name, email, subject, message } = req.body
//         try {
//             let transporter = nodemailer.createTransport({
//                 host: 'smtp.gmail.com',
//                 port: 587,
//                 service: 'gmail',
//                 secure: false,
//                 requireTLS: true,
//                 auth: {
//                     user: EMAIL,
//                     pass: PASSWORD
//                 }
//             });

//             let info = await transporter.sendMail({
//                 from: `${ name } <${ email }>`,
//                 to: EMAIL,
//                 subject,
//                 text: message,
//                 html: `<p>Name: ${ name }</p>
//                        <p>Email: ${ email }</p>
//                        <p>Message: ${ message }</p>`
//             })
//         }
//     }
// }