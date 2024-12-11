import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  }
)
