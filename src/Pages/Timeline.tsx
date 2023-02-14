import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header/Header";
import { Separator } from "../components/Separator/Separator";
import { Tweet } from "../components/Tweet/Tweet";

import "./timeline.css";

export function Timeline() {
    const [newTweet, setNewTweet] = useState("");
    const [tweets, setTweets] = useState(["teste", "teste2", "teste3"]);
    
    function createNewTweet(event: FormEvent) {
        event.preventDefault();
        setTweets([newTweet, ...tweets])
        setNewTweet("")
    }

    function handleHotkeySubmit(event: KeyboardEvent){
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey) ){
            setTweets([newTweet, ...tweets])
            setNewTweet("")
        }
    }
    

    return (
        <main className="timeline">
            <Header title="Home" />
            <form onSubmit={createNewTweet} className="new-tweet-form">
                <label htmlFor="tweet">
                    <img
                        src="https://github.com/joaovitor-penitente.png"
                        alt="Joao vitor"
                    />
                    <textarea
                        id="tweet"
                        placeholder="What's happening?"
                        value={newTweet}
                        onKeyDown = {handleHotkeySubmit}
                        onChange={(event) => {
                            setNewTweet(event.target.value);
                        }}
                    />
                </label>
                <button type="submit">tweet</button>
            </form>
            <Separator />
            {tweets.map((tweet) => {
                return <Tweet key={tweet} content={tweet} />;
            })}
        </main>
    );
}
