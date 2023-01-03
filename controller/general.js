import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDashBoardStats = async (req, res) => {
  try {
    const currentMonth = "November";
    const currentYear = "2021";
    const currentDay = "2021-11-15";
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    const overallStat = await OverallStat.findOne({
      year: currentYear,
    });

    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      dailyData,
      salesByCategory,
    } = overallStat || {};

    const thisMonthStats = monthlyData
      ? monthlyData.find(({ month }) => {
          return month === currentMonth;
        })
      : null;

    const todayStats = dailyData
      ? dailyData.find(({ date }) => {
          return date === currentDay;
        })
      : null;

    res.status(200).json({
      transactions,
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
