import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header/Header";
import { Separator } from "../components/Separator/Separator";
import { Tweet } from "../components/Tweet/Tweet";
import "./Status.css";

export function Status() {
    const [newAnswer, setNewAnswer] = useState("");
    const [answers, setAnswers] = useState([
        "concordo...",
        "faz sentido",
        "não concordo",
    ]);

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();
        setAnswers([newAnswer, ...answers])
        setNewAnswer("")
    }

    function handleHotkeySubmit(event: KeyboardEvent){
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey) ){
            setAnswers([newAnswer, ...answers])
            setNewAnswer("")
        }
    }

    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
            <Separator />
            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img
                        src="https://github.com/joaovitor-penitente.png"
                        alt="Joao vitor"
                    />
                    <textarea id="tweet"
                        placeholder="Tweet your answer"
                        onKeyDown = {handleHotkeySubmit}
                        onChange={(event) => { setNewAnswer(event.target.value) }}
                        value={newAnswer}
                    />
                </label>
                <button type="submit">
                    <PaperPlaneRight />
                    <span>answer</span>
                </button>
            </form>
            {answers.map((answer) => {
                return <Tweet key={answer} content={answer} />;
            })}
        </main>
    );
}
