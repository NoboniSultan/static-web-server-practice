const getProducts = (req, res) => {
    res.json({ message: 'Get all products' });
};

const getProductById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get product ${id}` });
};

module.exports = { getProducts, getProductById };