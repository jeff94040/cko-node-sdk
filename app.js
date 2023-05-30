import { Checkout } from 'checkout-sdk-node'
import dotenv from 'dotenv'

dotenv.config()

const secretKey = process.env.CKO_NAS_SECRET_KEY
const publicKey = process.env.CKO_NAS_PUBLIC_KEY

const cko = new Checkout(secretKey, {
  pk: publicKey
})

// troubleshooting this call - works ok
const response = await cko.platforms.queryPaymentInstruments('ent_xxx','verified')

console.log(response) 