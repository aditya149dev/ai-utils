import AIChat from "../components/AIChat";
import PopoverUI from "../components/PopoverUI";
import AISummary from "../components/AISummary";
import { useGemini } from "../hooks/useGemini";
import { useAppSelector } from "../redux/hooks";
import {
  selectGeminiChatResponse,
  selectGeminiSummaryResponse,
  selectGeminiIsLoading,
  selectGeminiError,
} from "../features/gemini/geminiSlice";

const Home = () => {
  const chatGeminiResponse = useAppSelector(selectGeminiChatResponse);
  const summaryGeminiResponse = useAppSelector(selectGeminiSummaryResponse);
  const isLoading = useAppSelector(selectGeminiIsLoading);
  const error = useAppSelector(selectGeminiError);

  const { generateContent: generateChatContent } = useGemini();
  const { generateSummaryFromFile } = useGemini();

  const handleChatGenerate = (text: string) => {
    generateChatContent(text);
  };

  const handleSummaryGenerate = (file: File) => {
    generateSummaryFromFile(file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="flex gap-8">
        <PopoverUI triggerText="AI Chat">
          <AIChat
            geminiResponse={chatGeminiResponse}
            isLoading={isLoading}
            error={error}
            onGenerateContent={handleChatGenerate}
          />
        </PopoverUI>
        <PopoverUI triggerText="AI Summary">
          <AISummary
            geminiResponse={summaryGeminiResponse}
            isLoading={isLoading}
            error={error}
            onGenerateSummary={handleSummaryGenerate}
          />
        </PopoverUI>
      </div>
    </div>
  );
};

export default Home;
