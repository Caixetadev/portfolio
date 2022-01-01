import React, { useEffect, useState } from "react";

function Projects(): JSX.Element {
  const [repo, setRepo] = useState([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      const api: Response = await fetch(
        "https://apiportfoliocaixeta.herokuapp.com/"
      );
      const data: [] = await api.json();

      setRepo(data);
    })();
  }, []);

  return (
    <div>
      <h1>
        {repo.map(
          (repos: { name: string }): JSX.Element => (
            <p key={repos.name}>{repos.name}</p>
          )
        )}
      </h1>
    </div>
  );
}

export default Projects;
