class Form {
    constructor(Model) {
        this.Model = Model;
    }

    getAllData = async (req, res) => {
        // 
        const forms = await this.Model.find();

        const BaseResponseInst = new BaseResponse(200, "success", forms);
        const response = BaseResponseInst.buildResponse();
        return res.json(response).status(200);
    };

    createForm = async (req, res) => {

        const BaseResponseInst = new BaseResponse();

        const { title, description, date } = req.body;

        if (!title) {
            BaseResponseInst.setValue(400, "title is invalid", null);
            return res.json(BaseResponseInst.buildResponse()).status(400);
        } if (!description) {
            BaseResponseInst.setValue(400, "cost is invalid", null);
            return res.json(BaseResponseInst.buildResponse()).status(400);
        } if (!date) {
            BaseResponseInst.setValue(400, "date is invalid", null);
            return res.json(BaseResponseInst.buildResponse()).status(400);
        };

        const item = new this.Model({
            title: title,
            description: description,
            date: date
        });
        try {
            const items = await this.Model.create(item);
            BaseResponseInst.setValue(201, "create todo successfully!", items);
        } catch (err) {
            console.log(`something went worng ! : ${err}`);
            BaseResponseInst.setValue(400, "something went worng !", null);
            return res.json(BaseResponseInst.buildResponse()).status(400);
        }



    };
}

module.exports = Form;

class BaseResponse {

    constructor(code, description, data) {
        this.code = code;
        this.description = description;
        this.data = data;

        console.log('running on constructor');
    }

    buildResponse() {
        return {
            status: {
                code: this.code,
                description: this.description,
            },
            data: this.data
        };
    }

    setValue(code, description, data) {
        this.code = code;
        this.description = description;
        this.data = data;
    }
}

