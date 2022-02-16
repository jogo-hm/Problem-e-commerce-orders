/**
 * GET method route from API
 */
const getHome = async (req,res) => {
 
    message = {
        status: 0,
        message: "DAXCSA: API WORKS CORRECTLY!"
    };
    return res.status(200).json(message);
}

module.exports = { getHome }