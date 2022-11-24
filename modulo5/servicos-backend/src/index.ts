import app from "./app"
import createZipcode from "./endpoints/createZipcode"
import newAddress from "./endpoints/newAddress"


app.post("/address",createZipcode)


app.post("/new/address",newAddress)