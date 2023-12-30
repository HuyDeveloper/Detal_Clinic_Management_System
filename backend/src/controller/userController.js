import * as userService from "../service/userService.js";

export async function getAlluser(req, res) {
  try {
    const [user] = await userService.getAlluser();
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function getAllDentist(req, res) {
  try {
    const dentist = await userService.getAllDentist();
    res.status(201).json({ dentist });
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function getAllStaff(req, res) {
  try {
    const staff = await userService.getAllStaff();
    res.status(201).json({ staff });
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function loginUser(req, res) {
  try {
    // const loginUser = req.loginUser;
    const username = req.body.username;
    const password = req.body.password;
    const [user] = await userService.getuserByUserName(username);
    const ischeckLogin = user.some(
      (e) => e.USERNAME === username && e.PASSWORD === password
    );
    if (!ischeckLogin) {
      throw new Error("password incorrect");
    }
    const [user_info] = await userService.getuserByUserInfoName(username);
    res.status(201).json({ user_info });
  } catch (error) {
    res.status(500).json({
      status: "Login Fail",
      error: error.message,
    });
  }
}

export async function registerUser(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const [Alluser] = await userService.getAlluser();
    const ischeckRegister = Alluser.some((e) => e.USERNAME === username);
    if (ischeckRegister) {
      throw new Error("Account already exists");
    }
    const registerUser = await userService.registerUser(username, password);
    res.status(201).json({
      status: "Create Successfully",
      message: "User is added",
    });
  } catch (error) {
    res.status(500).json({
      status: "Register Fail",
      error: error.message,
    });
  }
}

export async function updateUser(req, res) {
  try {
    const userid = req.body.userid; //req.loginUser.userid
    const fullname = req.body.fullname; // || req.loginUser.fullname;
    const nationalid = req.body.nationalid; // || req.loginUser.nationnalid;
    const address = req.body.address; // || req.loginUser.address;
    const phonenumber = req.body.phonenumber; // || req.loginUser.phonenumber;
    const usertype = req.body.usertype; // || req.loginUser.usertype;
    const gender = req.body.gender;
    const username = req.body.username; // || req.loginUser.username;

    const registerUser = await userService.updateUser(
      userid,
      fullname,
      nationalid,
      address,
      phonenumber,
      gender,
      usertype,
      username
    );
    res.status(201).json({
      status: "Update Successfully",
      message: "User is Updated",
    });
  } catch (error) {
    res.status(500).json({
      status: "Register Fail",
      error: error.message,
    });
  }
}

export async function deleteAccountUser(req, res) {
  try {
    console.log(req.query);
    
    const username = req.query.username;
    const usertype = req.query.usertype;
    if (!usertype || usertype !== "ADMIN") {
      throw new Error("Account not having permission");
    }
    const deleteAccountUser = await userService.deleteAccountUser(username);
    res.status(201).json({
      status: "Delete Successfully",
      message: "User is deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "delete Fail",
      error: error.message,
    });
  }
}

export async function ManageAccountUser(req, res) {
  try {
    const username = req.body.username;
    const usertype = req.body.usertype; // req.loginUser.usertype;
    const isactived = req.body.isactived;
    if (!usertype || usertype !== "ADMIN") {
      throw new Error("Account not having permission");
    }
    const deleteAccountUser = await userService.ManageAccountUser(
      username,
      isactived
    );
    res.status(201).json({
      status: "Update Successfully",
      message: "User is Update Status",
    });
  } catch (error) {
    res.status(500).json({
      status: "delete Fail",
      error: error.message,
    });
  }
}

export async function getAllPatient(req, res) {
  try {
    const result = await userService.getAllPatient();
    res.json({
      status: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
}

export async function createPatient(req, res) {
  try {
    const patient = req.body;
    console.log(patient);
    const result = await userService.createPatient(patient);
    res.json({
      status: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
}

export async function editPatient(req, res) {
  try {
    const patient = req.body;
    const result = await userService.editPatient(patient);
    res.json({
      status: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
}

export async function getAllBranch(req, res) {
  try {
    const branch = await userService.getAllBranch();
    res.json({
      branch,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
}

export async function createStafforDentist(req, res) {
  try {
    console.log(req.body);
    const fullname = req.body.fullname; // || req.loginUser.fullname;
    const nationalid = req.body.nationalid; // || req.loginUser.nationnalid;
    const address = req.body.address; // || req.loginUser.address;
    const phonenumber = req.body.phonenumber; // || req.loginUser.phonenumber;
    const usertype = req.body.usertype; // || req.loginUser.usertype;
    const gender = req.body.gender;
    const username = req.body.username; // || req.loginUser.username;
    const password = "123456";

    const user = await userService.createStafforDentist(
      fullname,
      nationalid,
      address,
      phonenumber,
      gender,
      usertype,
      username,
      password
    );
    res.json({
      message: "Success",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
}
