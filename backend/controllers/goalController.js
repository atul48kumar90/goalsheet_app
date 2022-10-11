const getGoals = (req, res) => {
    res.status(200).json({message: "Get goals"});
};

const setGoals = (req, res) => {

    if(!req.body.text)
    {
        res.status(400)
        throw new Error("please enter text field");
    }
    res.status(200).json({message: "create goals"});
};

const updateGoal = (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`});
};

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}`});
};

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}