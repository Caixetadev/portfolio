import React, { useEffect, useState } from "react";

function Projects(): JSX.Element {
  const reposFilter: string[] = [
    "aboutdogs",
    "Cep",
    "portfolio",
    "mydrugs",
    "pokedex",
  ];

  const [repo, setRepo] = useState([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      const api: Response = await fetch(
        "https://api.github.com/users/Caixetadev/repos"
      );
      const data: [] = await api.json();
      const filter = data.filter((item: { name: string }): boolean =>
        reposFilter.includes(item.name)
      );

      setRepo(filter);
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
