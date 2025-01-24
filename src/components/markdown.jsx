import style from './markdown.module.css';
import {useState , useEffect} from 'react';

const Markdown = () => {
    const [preview,setPreview] = useState();
       const [markdown, setMarkdown] = useState('#');
       const [isLoading, setIsLoading] = useState(true); 

       useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Simulated delay
    }, []);

    useEffect(() => {
        setPreview(markdown);
    }, [markdown]);

     return (
    <div className={style.app}>
    <textarea
        value={markdown}
        onChange={(event) => setMarkdown(event.target.value)}
        className={style.textarea}
    />
    <div className={style.preview}>
        { isLoading ? <div className={style.loading}>Loading...</div> : preview }
    </div>
</div>
);
}

export default Markdown;
