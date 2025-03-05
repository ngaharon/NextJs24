import dbConnect from "../../../../config/db"; // Import the database connection
import PostItem from "../../../../models/PostItem"; // Import the PostItem model

dbConnect(); // Connect to the database

export async function GET() {
    const postItems = await PostItem.find().select('-__v'); // Get all post items

    return Response.json(postItems); // Return the post items
}

export async function POST(request: Request) {
    const postItem = await request.json(); // Get the post item from the request body

    try {
        const savedItem = await new PostItem({...postItem}).save();
        return new Response(JSON.stringify(savedItem), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 201,
        });

    } catch (error) {
        return new Response(JSON.stringify({meesage: 'SERVER ERROR'}), {
            status: 500,
        });

    }
}