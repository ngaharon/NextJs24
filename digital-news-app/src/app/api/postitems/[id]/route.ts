import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";

dbConnect();

export default async (req: any, res: any) => {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            try {
                const postItem = await PostItem.findById(id);

                if (!postItem) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: postItem });
            } catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ success: false, error: error.message });
                } else {
                    res.status(400).json({ success: false });
                }
            }
            break;

        case "PUT":
            try {
                const postItem = await PostItem.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });

                if (!postItem) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: postItem });
            } catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ success: false, error: error.message });
                } else {
                    res.status(400).json({ success: false });
                }
            }
            break;

        case "DELETE":
            try {
                const deletedPostItem = await PostItem.deleteOne({ _id: id });

                if (!deletedPostItem) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ success: false, error: error.message });
                } else {
                    res.status(400).json({ success: false });
                }
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
};