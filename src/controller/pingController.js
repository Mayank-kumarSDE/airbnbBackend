
export const pingController = (req, res) => {
    res.status(200).json({ message: 'Server is alive!' }); // ← no await, no async needed
};