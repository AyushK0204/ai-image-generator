import userModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing Credentials!",
      });
    }
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({
        success: false,
        message: "User already registered!",
      });
    }

    const userData = {
      name,
      email,
      password,
    };
    const newUser = new userModel(userData);
    const user = await newUser.save();

    res.json({
      success: true,
      token: generateToken(user._id),
      user: {
        name: user.name,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.json({
        success: true,
        token: generateToken(user._id),
        user: {
          name: user.name,
        },
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const userCredits = async (req, res) => {
  try {
    const { userId } = req;
    const user = await userModel.findById(userId);
    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const paymentRazorpay = async (req, res) => {
  try {
    const { planId } = req.body;
    const { userId } = req;

    const userData = await userModel.findById(userId);
    if (!userData || !planId) {
      return res.json({
        success: false,
        message: "Missing Credentials",
      });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 100;
        amount = 50;
        break;

      case "Advanced":
        plan = "Advanced";
        credits = 500;
        amount = 200;
        break;

      case "Business":
        plan = "Business";
        credits = 5000;
        amount = 1500;
        break;

      default:
        return res.json({
          success: false,
          message: "Plan not found",
        });
    }
    date = Date.now();

    const transactionData = {
      userId,
      plan,
      amount,
      credits,
      date,
    };
    const newTransaction = await transactionModel.create(transactionData);
    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };
    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res.json({
          success: false,
          message: error.message,
        });
      }
      res.json({
        success: true,
        order,
      });
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === "paid") {
      const transactionData = await transactionModel.findById(
        orderInfo.receipt
      );
      if (transactionData.payment) {
        return res.json({
          success: false,
          message: "Payment failed",
        });
      }
      const userData = await userModel.findById(transactionData.userId);
      const creditBalance = userData.creditBalance + transactionData.credits;
      await userModel.findByIdAndUpdate(userData._id, { creditBalance });
      await transactionModel.findByIdAndUpdate(transactionData._id, {
        payment: true,
      });

      res.json({
        success: true,
        message: "Credits Added!",
      });
    } else {
      res.json({
        success: false,
        message: "Payment failed",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
