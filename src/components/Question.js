import React from 'react'
import Select from "../components/UI/Select";
import Input from "../components/UI/Input";

function Question(props) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-y-3 sm:gap-y-8" id="question1">
        <div className="col-span-12 sm:col-span-5">
        <label className="">Question 1</label>
        <p className="mt-2 text-xs text-white text-opacity-50">
            Enter a question
        </p>
        </div>
        <div className="col-span-12 sm:col-span-7">
        <Input
            required
            placeholder={"Type something ..."}
            onChange={(e) => props.setQuestions}
        />
        </div>
        <div className="col-span-12 sm:col-span-5 sm:pb-8 sm:border-b sm:border-b-primary-100">
        <label className=""></label>
        </div>
        <div className="col-span-12 sm:col-span-7 pb-6 sm:pb-8 border-b border-b-primary-100">
        <Select
            alt
            required
            onChange={(e) => props.setAnswers}
        >
            <option value="True">
            <span style={{ color: "red"}}>&#10004; </span>
            True
            </option>
            <option value="False">
            <span style={{ color: "green"}}>&#10005; </span>
            False
            </option>
        </Select>
        </div>
    </div>
  )
}

export default Question
