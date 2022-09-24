import './index.scss';

const AnimateLetters = ({ letterClass, charArray, startPoint }) => {
    return (
        <span>
                {charArray.map((char , i) => (
                    <span key={char + i} className={`${letterClass} _${i + startPoint}`}>
                        {char}
                    </span>
                ))}
        </span>
    )
};

export default AnimateLetters