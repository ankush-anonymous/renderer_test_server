const twilio = require("twilio");
require("dotenv").config();
const accountSid = "AC9a00bbb661b3a2b32b13257725ebd48d";
const authToken = "973b88ed8e687ee622cbf9f92f5e7ff6";
const twilioPhoneNumber = "+12763294161"; // This is the phone number you got from Twilio

const client = twilio(accountSid, authToken);

const sendOTP = async (phoneNumber, otp) => {
  try {
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: "+12763294161",
      to: phoneNumber,
    });

    console.log(`OTP sent to ${phoneNumber}`);
  } catch (error) {
    console.error(`Failed to send OTP to ${phoneNumber}:`, error);
    throw error;
  }
};

module.exports = sendOTP;
