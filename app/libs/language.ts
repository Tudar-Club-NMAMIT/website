import { client } from "@gradio/client";

export const languageFetch = async (text: string) => {
  const app = await client("http://127.0.0.1:7860/", {});
  const result = await app.predict("/predict", [
    text, // Use the input text provided to the function
  ]);
  return result;
};

// import { client } from "@gradio/client";

// const app = await client("http://127.0.0.1:7860/");
// const result = await app.predict("/predict", [
// 				"Howdy!", // string  in 'text' Textbox component
// 	]);

// console.log(result.data);
