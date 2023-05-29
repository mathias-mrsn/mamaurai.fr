import React, { useEffect } from 'react';

import styles from './Description.module.scss'

interface IDescriptionProps {
    name: string;
    active: boolean;

    style: {
        opacity: number;
        top: number;
    }
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Description = (props : IDescriptionProps) => {

    const [topics, setTopics] = React.useState<string[]>([])
    const [date, setDate] = React.useState<string>("In progress...");

    useEffect(() => {

        fetch(`https://api.github.com/repos/mathias-mrsn/${props.name}/topics`, {
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }})
        .then(response => response.json())
        .then(data => {
            setTopics(data.names)
        })
        .catch(err => console.log(err))

        fetch(`https://api.github.com/repos/mathias-mrsn/${props.name}/commits`, {
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }})
        .then(response => response.json())
        .then(data => {
            const now = new Date();
            const commit = new Date(data[0].commit.author.date);
            if (commit.getMonth() == now.getMonth() && commit.getFullYear() == now.getFullYear()) {
                setDate("Still working on it")
            } else {
                setDate(monthNames[commit.getMonth()] + " " + commit.getFullYear());
            }
        })
        .catch(err => console.log(err))
    }, []);

    return (
    <>
        <div
            className={styles.project_description_container}
            style={{
                opacity: props.style.opacity,
            }}
            
        >
            <div
                className={styles.date_box}
            >
                <div className={styles.cercle}/>
                <span>{date}</span>
            </div>
            { topics &&
                <div className={styles.topics_box}>
                    {topics.map((topic: string, item: number) => {
                        return (
                        <>
                            <span
                                key={item}
                                className={styles.topic}
                            >{topic}</span>
                        </>
                        );
                    })}
                </div>
            }
        </div> 
    </>
    );
};

export default Description;
    


{/* <span
        className={styles.title}
    >{props.name}</span>
    {topics.map((topic: string, item: number) => {
        return (
        <>
            <span
                key={item}
                className='
                
                '
            >{topic + " "}</span>
        </>  
        );
    })} */}