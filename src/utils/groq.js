import { Groq } from "groq-sdk";
const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true, //this is not recomended for production jadi jangan dipakai ya dek ya
});

export const requestToGroqAi = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [ 
      {
        role: "user",
        content: content
      },
    ],
    model:"llama3-8b-8192"
  });

  return reply.choices[0].message.content;
};


// import { Groq } from "groq-sdk";
// const GROQ_API = import.meta.env.VITE_GROQ;
// const groq = new Groq({
//   apiKey: GROQ_API,
//   dangerouslyAllowBrowser: true, // Remove this in production
// });

// export const requestToGroqAi = async (content) => {
//   const reply = await groq.voice.create({
//     tasks: [
//       {
//         kind: "text-to-speech",
//         options: {
//           text: content,
//           language: "en", // Replace with the desired language code
//         },
//       },
//     ],
//   });

//   return reply.results[0].audio;
// };
