import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const { year } = req.params;

    const overallStat = await OverallStat.findOne({ year });
    res.status(200).json(overallStat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
