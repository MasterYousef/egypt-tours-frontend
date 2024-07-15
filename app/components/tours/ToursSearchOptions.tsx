"use client"
import searchTours from "@/logic/searchTours"
import SortDropDown from "./sortDrobDown"
import WordSearch from "./wordSearch"
import Options from "./options"

function ToursSearchOptions() {
    const logic = searchTours()
  return (
    <>
    <div className="col-span-12 ">
      <div className="flex justify-between w-full flex-col-reverse md:flex-row md:items-center">
      <SortDropDown setSort={logic.setSort} />
      <WordSearch setWord={logic.setWord} word={logic.word}/>
      </div>
    </div>
    <Options setSearch={logic.setSearch} search={logic.search}/>
    </>
  )
}

export default ToursSearchOptions