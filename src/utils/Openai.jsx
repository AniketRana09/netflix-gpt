import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GPT_KEY;

const Openai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default Openai;
