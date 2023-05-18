import React, { useEffect } from 'react';
import Item from '@/components/projects/Item';
import {defaultProjectsList} from '@/data';

interface IProjectsProps {

}

const Projects = (props : IProjectsProps) => {

    const [projects, setProjects] = React.useState<string[]>(defaultProjectsList);

    useEffect(() => {
        fetch(`https://api.github.com/users/mathias-mrsn/repos?sort=created`, {
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }})
        .then(response => response.json())
        .then(data => {
            setProjects(data.map((item: any) => item.name));
        })
        .catch(err => console.log(err))
    }, []);

    return (
    <>
        <div
            className='
            dark:bg-[#0e0e0e]
            bg-[#fefefe]
            w-full
            h-full
            absolute
            '
        >
            <ul
                className='
                scroll-smooth
                relative
                w-auto
                h-full
                px-[7%]
                overflow-auto
                flex
                flex-col
                '
            >
                {projects.map((item: string, index: number) => {
                    return (
                        <Item
                            key={index}
                            projectName={item}
                            itemIndex={index}
                        />
                    )
                })}
            </ul>
            {/* <Footer /> */}
        </div>
    </>
    );
};

export default Projects;