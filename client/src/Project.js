import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("/api/project/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, [id]);

    return (
        <div className="content">
            <h1>{project.project_name}</h1>
            <div className="gridProject">
                <img
                    className="mainImageProject"
                    src={project.project_picture_url}
                />
                <p className="about">{project.about}</p>
            </div>
            {/* <p>{project.more_pictures}</p> */}
            {/*             <ul>
                {project.more_pictures.map((url) => (
                    <li className="noListStyle" key={url}>
                        <img className="portfolioImage" src={url} />
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
