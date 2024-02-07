const User = require('../model/userModel')


//API to get details of all the user
exports.getalldata = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            status: 'success',
            length: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

//API to get detail of a particular user
exports.getdata = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

//API to update a user
exports.updatedata = async (req, res) => {
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: 'success',
            data: {
                user: updateduser
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })

    }

}

//API to create a new user
exports.postdata = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                user
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }

}

//API to delete a particular user
exports.deletedata = async (req, res) => {
    try {
        const del = await User.findByIdAndDelete(req.params.id);
        if (del) {
            res.status(200).json({
                status: 'sucess',
                data: null,
                message: `(${req.params.id}) This Id Deleted Successfully )`
            })
        } else {
            res.status(400).json({
                status: 'Fail',
                message: "Id not Found"
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}