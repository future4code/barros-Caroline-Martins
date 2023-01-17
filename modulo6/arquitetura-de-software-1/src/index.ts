import { app } from "./app";
import { FindUserController } from "./controller/FindUserController";
import { UserController } from "./controller/UserController";

const findController = new FindUserController()
app.get("/all",findController.findUser)

const userController =new UserController()
app.post("/createUser",userController.createUser)