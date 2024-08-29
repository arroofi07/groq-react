import { useState } from "react";
import "./App.css";
import { requestToGroqAi } from "./utils/groq";
import { Light as SyntaxHighLight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGroqAi(content.value);
    setData(ai);
  };

  return (
    <>
      <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full m-auto ">
        <h1 className="text-green-500 font-semibold font-serif">
          React With Groq
        </h1>

        <form action="" className="flex flex-col gap-4 py-4 w-full">
          <input
            placeholder="Masukkan permintaan anda disini....."
            type="text"
            className="border-[1px] border-red-600 p-2 text-green-600"
            id="content"
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="text-green-600 p-2 bg-black rounded-[5px] "
          >
            Kirim
          </button>
        </form>
        <div className=" max-w-xl w-full mx-auto">
          {data ? (
            <SyntaxHighLight
              language="swift"
              style={darcula}
              wrapLongLines={true}
            >
              {data}
            </SyntaxHighLight>
          ) : null}
        </div>  
      </main>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import { requestToGroqAi } from "./utils/groq";
// import { Light as SyntaxHighLight } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

// function App() {
//   const [data, setData] = useState("");
//   const [isRecording, setIsRecording] = useState(false);

//   const handleSubmit = async (content) => {
//     const audioUrl = await requestToGroqAi(content);
//     setData(content);

//     // Play the returned audio
//     const audio = new Audio(audioUrl);
//     audio.play();
//   };

//   const startListening = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onresult = (event) => {
//       const speechResult = event.results[0][0].transcript;
//       handleSubmit(speechResult);
//     };

//     recognition.onspeechend = () => {
//       recognition.stop();
//       setIsRecording(false);
//     };

//     recognition.onerror = (event) => {
//       console.error(event.error);
//       setIsRecording(false);
//     };

//     recognition.start();
//     setIsRecording(true);
//   };

//   return (
//     <>
//       <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full m-auto">
//         <h1 className="text-green-500 font-semibold font-serif">React With Groq</h1>

//         <form action="" className="flex flex-col gap-4 py-4 w-full">
//           <input
//             placeholder="Masukkan permintaan anda disini....."
//             type="text"
//             className="border-[1px] border-red-600 p-2 text-green-600"
//             id="content"
//           />
//           <button
//             onClick={() => handleSubmit(document.getElementById("content").value)}
//             type="button"
//             className="text-green-600 p-2 bg-black rounded-[5px]"
//           >
//             Kirim
//           </button>
//           <button
//             onClick={startListening}
//             type="button"
//             className="text-green-600 p-2 bg-black rounded-[5px]"
//           >
//             {isRecording ? "Mendengarkan..." : "Mulai Bicara"}
//           </button>
//         </form>
//         <div className="max-w-xl w-full mx-auto">
//           {data ? (
//             <SyntaxHighLight language="swift" style={darcula} wrapLongLines={true}>
//               {data}
//             </SyntaxHighLight>
//           ) : null}
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;

