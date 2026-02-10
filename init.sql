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
VALUES ('Example TODO 1', 'Example description 1', 'TODO'), ('Example TODO 2', 'Example description 2', 'IN PROGRESS'), ('Example TODO 3', 'Example description 3', 'DONE')