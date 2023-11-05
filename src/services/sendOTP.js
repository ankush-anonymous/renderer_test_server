const axios = require("axios");

const sendOTP = async (phoneNumber, otp, templateId) => {
  const msg91AuthKey = "408355AEZofsTre65324a06P1"; // Replace with your MSG91 Auth Key

  try {
    // Define the message template with ##var## for OTP
    // const customTemplate = `Your OTP is ##var##. Please do not share it with anyone.`;

    const options = {
      method: "POST",
      url: `https://control.msg91.com/api/v5/otp?template_id=${templateId}&mobile=${phoneNumber}&otp=${otp}`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authkey: msg91AuthKey,
      },
    };

    // Send the OTP request to MSG91
    const response = await axios.request(options);

    // Handle success
    console.log("OTP sent successfully", response.data);
  } catch (error) {
    // Handle error
    console.error("Error sending OTP:", error);
    throw error;
  }
};

module.exports = sendOTP;
