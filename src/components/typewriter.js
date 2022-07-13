import { useState, useEffect } from 'react'

export default function Typewriter({ srcStringArr, timeoutValue }) {
    const [{ content, stringIndex, index, isReversed }, setContent] = useState({ content: '', stringIndex: 0, index: 0, isReversed: false })
    useEffect(() => {
        //If end of word and not reversed. Start reversal
        if (index === srcStringArr[stringIndex].length && !isReversed) {
            const delay = setTimeout(() => {
                setContent({ content: content, stringIndex: stringIndex, index: index, isReversed: true })
                clearTimeout(delay)
            }, timeoutValue * 20)
        }
        //Else if reversed
        else if (index === srcStringArr[stringIndex].length && isReversed) {
            //If word is done. Go to next word
            if (content === '') {
                //If word is last word. Reset array
                if (stringIndex + 1 === Object.keys(srcStringArr).length) {
                    const delay = setTimeout(() => {
                        setContent({ content: '', stringIndex: 0, index: 0, isReversed: false })
                        clearTimeout(delay)
                    }, timeoutValue)
                }
                //If there are more words. Continue
                else {
                    const delay = setTimeout(() => {
                        setContent({ content: '', stringIndex: stringIndex + 1, index: 0, isReversed: false })
                        clearTimeout(delay)
                    }, timeoutValue)
                }
            }
            //If word is not done. Remove a letter
            else {
                const delay = setTimeout(() => {
                    setContent({ content: content.slice(0, content.length - 1), stringIndex: stringIndex, index: index, isReversed: true })
                    clearTimeout(delay)
                }, timeoutValue)
            }
        }
        //Else, go forward
        else {
            const delay = setTimeout(() => {
                setContent({ content: content + srcStringArr[stringIndex][index], stringIndex: stringIndex, index: index + 1, isReversed: false })
                clearTimeout(delay)
            }, timeoutValue)
        }
    }, [content, isReversed])

    return <span className="text-med-accent">{content}</span>
}