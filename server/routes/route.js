import Express  from "express";
import { userSignup , userLogin} from "../controllers/usercontroller.js";
import { getProducts ,getProductsbyID } from "../controllers/productcontroller.js";
import { addPaymentGateway , paymentResponse} from "../controllers/paymentcontroller.js";

const router = Express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/products', getProducts);
router.get('/product/:id', getProductsbyID);
router.get('/payment', addPaymentGateway);


export default router;