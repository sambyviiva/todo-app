CREATE TYPE todo_status AS ENUM ('TODO', 'IN PROGRESS', 'DONE', 'REMOVED');
CREATE TABLE todo (
    id              INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title           VARCHAR(50) NOT NULL,
    description     VARCHAR(255),
    status          todo_status NOT NULL DEFAULT 'TODO',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    removed_at      TIMESTAMP
);

INSERT INTO todo (title, description, status)
VALUES ('testi', 'testi kuvaus', 'TODO'), ('testi2', 'testi kuvaus2', 'IN PROGRESS')