import React, { useState } from "react";

export default function Tabs({ tabs }) {
    const [content, setContent] = useState(tabs[0].content)
    return <div>
        <ul>
            {
                tabs.map(el => <li key={el.title} onClick={() => setContent(el.content)} >{el.title}</li>)
            }
        </ul>
        <p>{content}</p>
    </div>
}