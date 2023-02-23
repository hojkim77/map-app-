const express = require("express");
const router = express.Router();
const Todo = require("../schemas/todo");
const crypto = require("crypto");

//루틴 추가
router.post("/addtodo", async (req, res) => { //react 프론트 부분에서 ~/member/join으로 보내면 여기 post를 타게된다.
  try {
    let obj = { email: req.body.email };
    let user = await Todo.findOne(obj);

    if (user){
      console.log("success!")
    }
    else{
      obj = {
        email: req.body.email,
        todo: req.body.todo,
      };
      todo = new Todo(obj);
      await todo.save();
    }
    
    //let user = await User.findOne(obj); db내에 있는 데이터 찾기

  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});


router.get("/logout", (req, res) => {
  console.log("/logout" + req.sessionID);
  req.session.destroy(() => {
    res.json({ message: true });
  });
});

router.post("/delete", async (req, res) => {
  try {
    await User.remove({
      _id: req.body._id
    });
    res.json({ message: true });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/update", async (req, res) => {
  try {
    await User.update({
      _id: req.body._id,
      name: req.body.name
    });
    res.json({ message: true });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/add", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: true });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/getAllMember", async (req, res) => {
  try {
    const user = await User.find({});
    res.json({ message: user });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;