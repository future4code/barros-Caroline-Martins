import { app } from "./app";
import { DeleteUserController } from "./controller/DeleteUserController";
import { FindUserController } from "./controller/FindUserController";
import { UserController } from "./controller/UserController";

const findController = new FindUserController()
app.get("/all",findController.findUser)

const userController =new UserController()
app.post("/createUser",userController.createUser)

const deleteUser = new DeleteUserController()
app.delete("/:id",deleteUser.deleteUser)