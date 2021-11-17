const express = require("express");
const router = express.Router();
const mailer = require("./mail");

router.get("/mail", (req, res) => {
  const { email } = req.body;

  let emailParam = {
    toEmail: email, // 수신할 이메일

    subject: "ZPORT 회원가입 인증메일 번호입니다.", // 메일 제목

    text: `오른쪽 숫자 6자리를 입력해주세요 : `, // 메일 내용
  };

  mailer.sendGmail(emailParam);

  res.status(200).send("성공");
});

module.exports = router;
