import React from "react";
import Header from "./components/HeaderSection/Header";
import Feed from "./components/FeedSection/Feed";
import SearchVideoResult from "./components/SearchSection/SearchVideoResult";
import VideoDetails from "./components/VideoSection/VideoDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./useContextHook/useContextApi";
import { ThemeProvider } from "./useContextHook/useTheme";
function App() {
  return (
    <AppContext>
    <ThemeProvider>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchQuery" element={<SearchVideoResult />} />
        <Route path="/video/:categoryId/:videoId" element={<VideoDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    </AppContext>
  );
}
export default App;
